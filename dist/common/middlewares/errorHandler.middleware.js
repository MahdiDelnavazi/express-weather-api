"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const exceptions_1 = require("../exceptions");
const errorHandler = (err, req, res, next) => {
    if (err instanceof exceptions_1.HttpException) {
        const { status, ...error } = err;
        res.status(status).json({ message: err.message, ...error });
    }
    else {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
    next();
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.middleware.js.map