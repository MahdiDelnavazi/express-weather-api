"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherController = void 0;
const helpers_1 = require("../../../common/helpers");
const dto_1 = require("./dto");
const weather_service_1 = require("./weather.service");
const express_1 = require("express");
const WeatherController = () => {
    const router = (0, express_1.Router)();
    const weatherService = new weather_service_1.WeatherService();
    router.post('/', (0, helpers_1.handleRoute)(async (req, res, next) => {
        const fetchWeatherDto = req.body;
        const weather = await weatherService.fetchWeather(fetchWeatherDto);
        res.status(200).send(weather);
    }, {
        body: dto_1.FetchWeatherDto,
    }));
    return router;
};
exports.WeatherController = WeatherController;
//# sourceMappingURL=weather.controller.js.map