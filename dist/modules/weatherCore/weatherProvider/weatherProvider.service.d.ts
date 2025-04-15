import type { WeatherInfo } from '@modules/weatherCore/weatherProvider';
export declare class WeatherProviderService {
    private readonly axios;
    private readonly locationGeocoderService;
    constructor();
    getWeather(country: string, city: string): Promise<WeatherInfo>;
}
