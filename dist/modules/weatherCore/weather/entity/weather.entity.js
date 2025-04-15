"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Weather_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weather = void 0;
const typeorm_1 = require("typeorm");
let Weather = Weather_1 = class Weather {
    constructor(data) {
        if (data) {
            Object.assign(this, data);
        }
    }
    static fromWeatherInfo(country, cityName, weatherInfo) {
        return new Weather_1({
            cityName: cityName,
            country: country,
            description: weatherInfo.weather[0].description,
            temperature: weatherInfo.main.temp,
            humidity: weatherInfo.main.humidity,
            windSpeed: weatherInfo.wind.speed,
        });
    }
};
exports.Weather = Weather;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Weather.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'city_name' }),
    __metadata("design:type", String)
], Weather.prototype, "cityName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Weather.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], Weather.prototype, "temperature", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Weather.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Weather.prototype, "humidity", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'wind_speed', type: 'float' }),
    __metadata("design:type", Number)
], Weather.prototype, "windSpeed", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fetched_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Weather.prototype, "fetchedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
    }),
    __metadata("design:type", Date)
], Weather.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Weather.prototype, "updatedAt", void 0);
exports.Weather = Weather = Weather_1 = __decorate([
    (0, typeorm_1.Entity)({ name: 'weather_data' }),
    __metadata("design:paramtypes", [Object])
], Weather);
//# sourceMappingURL=weather.entity.js.map