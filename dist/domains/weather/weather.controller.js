"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherController = void 0;
const express_1 = require("express");
const weather_service_1 = require("./weather.service");
const WeatherController = () => {
    const router = (0, express_1.Router)();
    const weatherService = new weather_service_1.WeatherService();
    router.get('/', async (req, res) => {
        const weathers = await weatherService.findAll();
        res.json(weathers);
    });
    return router;
};
exports.WeatherController = WeatherController;
//# sourceMappingURL=weather.controller.js.map