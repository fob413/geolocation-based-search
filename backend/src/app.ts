import express, { Express, Request, Response } from "express";
import { json as jsonParser } from "body-parser";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";
import { formattedResponse } from "./utils/response";


const app: Express = express();

// app setup
app.use(jsonParser());
app.use(cors());

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
