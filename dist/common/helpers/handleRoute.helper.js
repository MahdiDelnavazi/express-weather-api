"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRoute = void 0;
const helpers_1 = require("./");
const handleRoute = (func, options) => {
    return async (req, res, next) => {
        try {
            if (options?.body) {
                req.body = await helpers_1.ValidationHelper.validate(req.body, options.body);
            }
            if (options?.query) {
                req.query = (await helpers_1.ValidationHelper.validate(req.query, options.query));
            }
            await func(req, res, next);
        }
        catch (error) {
            next(error);
        }
        finally {
            next();
        }
    };
};
exports.handleRoute = handleRoute;
//# sourceMappingURL=handleRoute.helper.js.map