import { ClassConstructor } from 'class-transformer';
import * as express from 'express';
import { UserJWTPayload } from '@modules/weatherCore/account/authentication/types';

declare global {
    namespace Express {
        interface Request {
            user?: UserJWTPayload;
        }

        interface Response {
            transformAndSend: <T extends object>(
                data: any,
                cls: ClassConstructor<T>,
            ) => void;
        }
    }
}
