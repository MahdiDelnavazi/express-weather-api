import { HttpException } from '@common/exceptions';
export declare class BadRequestException extends HttpException {
    private readonly error?;
    constructor(message?: string, error?: object | object[] | string | string[]);
}
