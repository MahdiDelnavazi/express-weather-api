"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./common/config");
const database_1 = require("./common/database");
const weather_controller_1 = require("./modules/weatherCore/weather/weather.controller");
const middlewares_1 = require("./common/middlewares");
const express_1 = __importDefault(require("express"));
const startServer = async () => {
    const app = (0, express_1.default)();
    await database_1.Database.initialize();
    console.log('Database connection established');
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use('/weather', (0, weather_controller_1.WeatherController)());
    app.use(middlewares_1.errorHandler);
    app.listen(config_1.Config.Server.PORT, async (error) => {
        if (error) {
            console.error('An error occurred:');
            console.error(error);
            process.exit(1);
        }
        console.log(`Server is running on port ${config_1.Config.Server.PORT}`);
    });
    process.on('exit', async () => {
        await database_1.Database.close();
    });
};
void startServer();
//# sourceMappingURL=app.js.map