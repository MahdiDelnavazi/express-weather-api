import { ClassConstructor } from 'class-transformer';
import { NextFunction, Request, Response } from 'express';
export type HandleRouteOptions<BodyType extends object> = {
    body?: ClassConstructor<BodyType>;
};
export declare const handleRoute: <T, BodyType extends object>(func: (req: Request, res: Response, next: NextFunction) => Promise<T>, options?: HandleRouteOptions<BodyType>) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
