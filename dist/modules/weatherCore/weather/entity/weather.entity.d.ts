import { WeatherInfo } from '@modules/weatherCore/weatherProvider';
export declare class Weather {
    id: string;
    cityName: string;
    country: string;
    temperature: number;
    description: string;
    humidity: number;
    windSpeed: number;
    fetchedAt: Date;
    createdAt: Date;
    updatedAt?: Date;
    constructor(data: Partial<Weather>);
    static fromWeatherInfo(country: string, cityName: string, weatherInfo: WeatherInfo): Weather;
}
