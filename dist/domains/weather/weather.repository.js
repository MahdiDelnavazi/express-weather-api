"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherRepository = void 0;
class WeatherRepository {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll() {
        return this.repository.find();
    }
}
exports.WeatherRepository = WeatherRepository;
//# sourceMappingURL=weather.repository.js.map