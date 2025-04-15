"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFountException = void 0;
const exceptions_1 = require("./");
class NotFountException extends exceptions_1.HttpException {
    constructor(message) {
        super(message || 'Not Found', 404);
    }
}
exports.NotFountException = NotFountException;
//# sourceMappingURL=notFound.exception.js.map