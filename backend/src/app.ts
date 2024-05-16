import express, { Express, Request, Response } from "express";
import { json as jsonParser } from "body-parser";
import cors from "cors";
import logger from "morgan";
import { errorHandler } from "./middlewares/errorHandler";
import { formattedResponse } from "./utils/response";
import Routes from "./routes";


const app: Express = express();

const routes = new Routes();

// app setup
app.use(jsonParser());
app.use(cors());
app.use(logger("dev"));

// routes setup
app.use("/api/v1", routes.router);

// Welcome API
app.get("/", (req: Request, res: Response) => {
    return res.send("GEOLOCATION BACKEND SERVER");
});

// 404 route
app.use("*", (req: Request, res: Response) => {
    return formattedResponse(
        res,
        404,
        'error',
        'Route does not exist'
    );
});

// error handler
app.use(errorHandler);

export default app;
