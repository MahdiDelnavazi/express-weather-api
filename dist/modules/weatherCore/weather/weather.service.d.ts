import { Weather } from '@modules/weatherCore/weather';
import { FetchWeatherDto } from './dto';
export declare class WeatherService {
    constructor();
    private readonly weatherRepository;
    private readonly weatherProvider;
    findAll(): Promise<Weather[]>;
    fetchWeather(fetchWeatherDto: FetchWeatherDto): Promise<Weather>;
}
