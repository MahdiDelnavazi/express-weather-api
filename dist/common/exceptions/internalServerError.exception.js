"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerErrorException = void 0;
const exceptions_1 = require("./");
class InternalServerErrorException extends exceptions_1.HttpException {
    constructor(message) {
        super(message || 'Internal Server Error', 500);
    }
}
exports.InternalServerErrorException = InternalServerErrorException;
//# sourceMappingURL=internalServerError.exception.js.map