"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherService = void 0;
const database_1 = require("../../../common/database");
const weather_1 = require("./");
const weather_repository_1 = require("./weather.repository");
const weatherProvider_service_1 = require("../weatherProvider/weatherProvider.service");
class WeatherService {
    constructor() {
        this.weatherRepository = new weather_repository_1.WeatherRepository(database_1.Database.getRepository(weather_1.Weather));
        this.weatherProvider = new weatherProvider_service_1.WeatherProviderService();
    }
    async findAll() {
        await this.weatherProvider.getWeather('GB', 'London');
        return this.weatherRepository.findAll();
    }
    async fetchWeather(fetchWeatherDto) {
        const weatherInfo = await this.weatherProvider.getWeather(fetchWeatherDto.country, fetchWeatherDto.cityName);
        const weather = weather_1.Weather.fromWeatherInfo(fetchWeatherDto.country, fetchWeatherDto.cityName, weatherInfo);
        return this.weatherRepository.insert(weather);
    }
}
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map