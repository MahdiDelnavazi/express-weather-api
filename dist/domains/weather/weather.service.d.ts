import { Weather } from '@domains/weather';
export declare class WeatherService {
    constructor();
    private readonly weatherRepository;
    findAll(): Promise<Weather[]>;
}
