import { HttpException } from '@common/exceptions';

export class NotFountException extends HttpException {
    constructor(message?: string) {
        super(message || 'Not Found', 404);
    }
}
