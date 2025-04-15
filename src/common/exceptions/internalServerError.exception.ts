import { HttpException } from '@common/exceptions';
import { HttpStatus } from '@common/enums';

export class InternalServerErrorException extends HttpException {
    constructor(message?: string) {
        super(
            message || 'Internal Server Error',
            HttpStatus.INTERNAL_SERVER_ERROR,
        );
    }
}
