import { NextFunction, Response, Request } from "express";
import { GeoLocationModel } from "../../models";
import Exception from "../../utils/exception";

class GeoLocationService {
    constructor() { }

    private buildAggregateQuery = (search: string | undefined, longitude: number | undefined, latitude: number | undefined) => {
        if (!search && !longitude && !latitude) return null;

        const project = {
            _id: 1,
            city: 1,
            county: 1,
            country: 1,
            street: 1,
            location: 1,
            timezone: 1,
            score: { $meta: "searchScore" }
        };

        let query: any = [
            {
                $search: {
                    index: "geo",
                    compound: { }
                }
            },
            {
                $limit: 10,
            },
            {
                $project: project
            }
        ];

        if (longitude && latitude) {
            query[0].$search.compound["must"] = [
                {
                    geoWithin: {
                        circle: {
                            center: {
                                type: "Point",
                                coordinates: [longitude, latitude]
                            },
                            radius: 100000
                        },
                        path: "location"
                    }
                }
            ];
        }
        if (search) {
            query[0].$search.compound["should"] = [
                {
                    text: {
                        query: search || "",
                        path: "street",
                        fuzzy: {
                            maxEdits: 1
                        },
                        score: { boost: { value: 1.5 } }
                    }
                },
                {
                    text: {
                        query: search || "",
                        path: "county",
                        fuzzy: {
                            maxEdits: 1
                        },
                        score: { boost: { value: 2 } }
                    }
                },
                {
                    text: {
                        query: search || "",
                        path: "city",
                        fuzzy: {
                            maxEdits: 1
                        },
                        score: { boost: { value: 2.5 } }
                    }
                },
                {
                    text: {
                        query: search || "",
                        path:  "country",
                        fuzzy: {
                            maxEdits: 1
                        },
                        score: { boost: { value: 4 } }
                    }
                },
            ]
        }

        return query;
    }

    public getGeoLocations = async (req: Request, res: Response, next: NextFunction) => {
        const { q: search, longitude, latitude } = req.query as any;

        const query = this.buildAggregateQuery(search, longitude, latitude);

        if (query) {
            return await GeoLocationModel.aggregate(query);
        } else {
            return await GeoLocationModel.find({}).limit(10);
        }
    }

    public queryValidatorMiddleware = async (req: Request, res: Response, next: NextFunction) => {
        const { longitude, latitude } = req.query;

        if ((longitude && !latitude) || (!longitude && latitude)) {
            let err = new Exception(400, "Longitude and Latitude must both be in query");
            return next(err);
        }

        if (
            typeof longitude === "string" &&
            !isNaN(parseFloat(longitude as string)) &&
            typeof latitude === "string" &&
            !isNaN(parseFloat(latitude as string))
        ) {
            const long = parseFloat(longitude as string);
            const lat = parseFloat(latitude as string);

            if (
                (long > 180 || long < -180) ||
                (lat > 90 || lat < -90)
            ) {
                let err = new Exception(400, "Invalid coordinates. latitude must be within the range of -90 to 90 and longitude must be within the range -180 to 180");
                return next(err);
            }
            (req.query as any)["longitude"] = long;
            (req.query as any)["latitude"] = lat;
        }
        return next();
    }
}

export default GeoLocationService;
