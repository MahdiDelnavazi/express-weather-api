import { HttpException } from '@common/exceptions';
export declare class InternalServerErrorException extends HttpException {
    constructor(message?: string);
}
