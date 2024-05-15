import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { formattedResponse } from "../utils/response";


export const errorHandler: ErrorRequestHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    return formattedResponse(
        res,
        err.status || 500,
        'error',
        err.message || '',
        undefined,
        err.data || {}
    );
}
