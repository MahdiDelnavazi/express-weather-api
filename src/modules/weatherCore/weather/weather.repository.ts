import { Repository } from 'typeorm';
import { Weather, FindWeatherRecordsDto } from '@modules/weatherCore/weather';

export class WeatherRepository {
    constructor(private readonly repository: Repository<Weather>) {}

    async findAll(
        findWeatherRecordsDto: FindWeatherRecordsDto,
    ): Promise<Weather[]> {
        return this.repository.find({
            where: {
                cityName: findWeatherRecordsDto.cityName,
                country: findWeatherRecordsDto.country,
            },
        });
    }

    async findOneById(id: string): Promise<Weather> {
        return this.repository.findOneBy({ id: id });
    }

    async insert(weather: Weather): Promise<Weather> {
        return this.repository.save(weather);
    }

    async findOneAndUpdate(
        id: string,
        weather: Partial<Weather>,
    ): Promise<Weather> {
        await this.repository.update(
            { id: id },
            {
                ...weather,
            },
        );

        return this.repository.findOneBy({ id: id });
    }

    async deleteOneById(id: string): Promise<boolean> {
        const result = await this.repository.delete({ id: id });
        return result.affected === 1;
    }

    async findLatestByCityName(cityName: string): Promise<Weather> {
        return this.repository.findOne({
            where: {
                cityName: cityName,
            },
            order: {
                createdAt: 'DESC',
            },
        });
    }
}
