import { Repository } from 'typeorm';
import { Weather } from '@modules/weatherCore/weather';
export declare class WeatherRepository {
    private readonly repository;
    constructor(repository: Repository<Weather>);
    findAll(): Promise<Weather[]>;
    insert(weather: Weather): Promise<Weather>;
}
