"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationGeocoderService = void 0;
const config_1 = require("../../../common/config");
const axios_1 = require("axios");
class LocationGeocoderService {
    constructor() {
        this.axios = (0, axios_1.create)({
            baseURL: config_1.Config.OpenWeatherMap.GEOCODING_API_URL,
            params: {
                appId: config_1.Config.OpenWeatherMap.API_KEY,
            },
        });
    }
    async geocodeLocation(country, city) {
        const response = await this.axios.get('/direct', {
            params: {
                q: `${city},${country}`,
                limit: 1,
            },
        });
        if (!response.data || response.data.length === 0) {
            return null;
        }
        return response.data[0];
    }
}
exports.LocationGeocoderService = LocationGeocoderService;
//# sourceMappingURL=locationGeocoder.service.js.map