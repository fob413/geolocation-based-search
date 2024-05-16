import { Router } from "express";
import { GeoLocationController } from "../controllers";


export class Routes {
    public router: Router;
    private geoLocationController: GeoLocationController;

    constructor() {
        this.router = Router();

        this.geoLocationController = new GeoLocationController();

        this.routes();
    }

    public routes() {
        this.router.use("/geo-location", this.geoLocationController.router);
    }
}

export default Routes;
