import { ClassConstructor } from 'class-transformer';
import { NextFunction, Request, Response } from 'express';
export type HandleRouteOptions<BodyType extends object, QueryType extends object> = {
    body?: ClassConstructor<BodyType>;
    query?: ClassConstructor<QueryType>;
};
export declare const handleRoute: <T, BodyType extends object, QueryType extends object>(func: (req: Request, res: Response, next: NextFunction) => Promise<T>, options?: HandleRouteOptions<BodyType, QueryType>) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
