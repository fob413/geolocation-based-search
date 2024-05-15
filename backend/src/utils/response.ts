import { Response } from "express";


export const formattedResponse = (
    res: Response, statusNumber = 200,
    status: "success" | "error" = "success",
    message?: string | undefined,
    data?: any, errors?: any
) => {
    return res.status(statusNumber).send({
        status,
        message,
        data,
        errors
    });
}
