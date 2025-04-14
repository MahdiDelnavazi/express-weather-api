"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
require("dotenv/config");
exports.Config = {
    Server: {
        PORT: +process.env.PORT || 3000,
    },
    Environment: {
        NAME: (process.env.NODE_ENV || 'development'),
        IS_PRODUCTION: process.env.NODE_ENV === 'production',
        IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
        IS_LOCAL: process.env.NODE_ENV === 'local',
        IS_TEST: process.env.NODE_ENV === 'test',
    },
    Database: {},
};
//# sourceMappingURL=index.js.map