import { NextFunction, Response, Request } from "express";
import { GeoLocationModel } from "../../models";
import Exception from "../../utils/exception";

class GeoLocationService {
    constructor() { }

    public getGeoLocations = async (req: Request, res: Response, next: NextFunction) => {
        const { q: search, longitude, latitude } = req.query;

        if (search) {
            return await GeoLocationModel.aggregate([
                {
                    $search: {
                        compound: {
                            should: [
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
                    }
                },
                {
                    $limit: 10,
                },
                {
                    $project: {
                        _id: 1,
                        city: 1,
                        county: 1,
                        country: 1,
                        street: 1,
                        longitude: 1,
                        latitude: 1,
                        score: {$meta: "searchScore"}
                    }
                }
            ]);
        } else {
            return await GeoLocationModel.find({}).limit(10);
        }
    }
}

export default GeoLocationService;
