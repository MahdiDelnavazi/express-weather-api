"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestException = void 0;
const exceptions_1 = require("./");
class BadRequestException extends exceptions_1.HttpException {
    constructor(message, error) {
        super(message || 'Bad Request', 400);
        this.error = error;
    }
}
exports.BadRequestException = BadRequestException;
//# sourceMappingURL=badRequest.exception.js.map