import { NextFunction, Response, Request } from "express";
import { GeoLocationModel } from "../../models";

class GeoLocationService {
    constructor() { }

    public getGeoLocations = async (req: Request, res: Response, next: NextFunction) => {
        const { q: search, longitude, latitude } = req.query;
        return await GeoLocationModel.find({});
    }
}

export default GeoLocationService;
