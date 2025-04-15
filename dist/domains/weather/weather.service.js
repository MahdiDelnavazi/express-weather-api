"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherService = void 0;
const database_1 = require("../../common/database");
const weather_1 = require("./");
const weather_repository_1 = require("./weather.repository");
class WeatherService {
    constructor() {
        this.weatherRepository = new weather_repository_1.WeatherRepository(database_1.Database.getRepository(weather_1.Weather));
    }
    async findAll() {
        return this.weatherRepository.findAll();
    }
}
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map