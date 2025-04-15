import { HttpException } from '@common/exceptions';
import { HttpStatus } from '@common/enums';

export class NotFoundException extends HttpException {
    constructor(message?: string) {
        super(message || 'Not Found', HttpStatus.NOT_FOUND);
    }
}
