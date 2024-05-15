import express, { Express, Request, Response } from "express";
import { json as jsonParser } from "body-parser";
import cors from "cors";


const app: Express = express();

// app setup
app.use(jsonParser());
app.use(cors());

// Welcome API
app.get("/", (req: Request, res: Response) => {
    return res.send("GEOLOCATION BACKEND SERVER");
});

export default app;
