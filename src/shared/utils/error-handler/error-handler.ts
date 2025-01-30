import { Request, Response, NextFunction } from "express";

import createError from "http-errors";

export function handelCreateError(status: number, message: string){
    return createError(status, message);  
}