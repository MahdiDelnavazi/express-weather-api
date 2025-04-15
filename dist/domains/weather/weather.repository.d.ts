import { Repository } from 'typeorm';
import { Weather } from '@domains/weather';
export declare class WeatherRepository {
    private readonly repository;
    constructor(repository: Repository<Weather>);
    findAll(): Promise<Weather[]>;
}
