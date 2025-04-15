"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherProviderService = void 0;
const config_1 = require("../../../common/config");
const axios_1 = require("axios");
const locationGeocoder_service_1 = require("../locationGeocoder/locationGeocoder.service");
class WeatherProviderService {
    constructor() {
        this.locationGeocoderService = new locationGeocoder_service_1.LocationGeocoderService();
        this.axios = (0, axios_1.create)({
            baseURL: config_1.Config.OpenWeatherMap.API_URL,
            params: {
                appId: config_1.Config.OpenWeatherMap.API_KEY,
            },
        });
    }
    async getWeather(country, city) {
        const location = await this.locationGeocoderService.geocodeLocation(country, city);
        if (!location) {
            throw new Error('Location not found');
        }
        const weatherData = await this.axios.get('/weather', {
            params: {
                lat: location.lat,
                lon: location.lon,
            },
        });
        if (weatherData.data.cod === 400) {
            throw new Error('Weather not available');
        }
        return weatherData.data;
    }
}
exports.WeatherProviderService = WeatherProviderService;
//# sourceMappingURL=weatherProvider.service.js.map