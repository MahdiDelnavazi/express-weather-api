"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./common/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.listen(config_1.Config.Server.PORT, (error) => {
    if (error) {
        console.error('An error occurred:');
        console.error(error);
        process.exit(1);
    }
    console.log(`Server is running on port ${config_1.Config.Server.PORT}`);
});
//# sourceMappingURL=app.js.map