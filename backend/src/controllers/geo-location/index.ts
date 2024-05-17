import { Router, Request, Response, NextFunction } from "express";
import { formattedResponse } from "../../utils/response";
import GeoLocationService from "./geo-location.service";


export class GeoLocationController {
    public router: Router;
    private geoLocationService: GeoLocationService;

    constructor () {
        this.router = Router();
        this.geoLocationService = new GeoLocationService();

        this.routes();
    }

    public getGeoLocations = async (req: Request, res: Response, next: NextFunction) => {
        const geoLocationData = await this.geoLocationService.getGeoLocations(req, res, next);

        return formattedResponse(
            res,
            200,
            "success",
            "Successfully retrieved geo-locations",
            { suggestions: geoLocationData }
        );
    }

    public routes () {
        this.router.get("/search", this.getGeoLocations);
    }
}

export default GeoLocationController;
