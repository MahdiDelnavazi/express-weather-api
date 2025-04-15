"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationHelper = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const badRequest_exception_1 = require("../exceptions/badRequest.exception");
class ValidationHelper {
    static async validate(body = {}, classType) {
        const instance = (0, class_transformer_1.plainToInstance)(classType, body);
        const errors = await (0, class_validator_1.validate)(instance);
        if (errors.length > 0) {
            const errorMessages = Object.fromEntries(errors.map((error) => [
                error.property,
                Object.values(error.constraints),
            ]));
            throw new badRequest_exception_1.BadRequestException('Validation Error', errorMessages);
        }
        return instance;
    }
}
exports.ValidationHelper = ValidationHelper;
//# sourceMappingURL=validation.helper.js.map