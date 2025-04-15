import { Database } from '@common/database';
import { Weather, FindWeatherRecordsDto } from '@modules/weatherCore/weather';
import { WeatherRepository } from '@modules/weatherCore/weather/weather.repository';
import { WeatherProviderService } from '@modules/weatherCore/weatherProvider/weatherProvider.service';
import { FetchWeatherDto } from './dto';
import { NotFoundException } from '@common/exceptions';
import { isUUID } from 'class-validator';
import { UpdateWeatherRecordDto } from '@modules/weatherCore/weather/dto/updateWeatherRecord.dto';

export class WeatherService {
    constructor() {}

    private readonly weatherRepository = new WeatherRepository(
        Database.getRepository(Weather),
    );
    private readonly weatherProvider = new WeatherProviderService();

    async findAll(
        findWeatherRecordsDto: FindWeatherRecordsDto,
    ): Promise<Weather[]> {
        return this.weatherRepository.findAll(findWeatherRecordsDto);
    }

    async findOneById(id: string): Promise<Weather> {
        if (!isUUID(id)) {
            throw new NotFoundException();
        }

        const weatherRecord = await this.weatherRepository.findOneById(id);

        if (!weatherRecord) {
            throw new NotFoundException();
        }

        return weatherRecord;
    }

    async fetchWeather(fetchWeatherDto: FetchWeatherDto): Promise<Weather> {
        const weatherInfo = await this.weatherProvider.getWeather(
            fetchWeatherDto.country,
            fetchWeatherDto.cityName,
        );

        const weather = Weather.fromWeatherInfo(
            fetchWeatherDto.country,
            fetchWeatherDto.cityName,
            weatherInfo,
        );

        return this.weatherRepository.insert(weather);
    }

    async updateOneById(
        id: string,
        updateWeatherRecordDto: UpdateWeatherRecordDto,
    ): Promise<Weather> {
        if (!isUUID(id)) {
            throw new NotFoundException();
        }

        const updatedWeatherRecord =
            await this.weatherRepository.findOneAndUpdate(
                id,
                updateWeatherRecordDto,
            );

        if (!updatedWeatherRecord) {
            throw new NotFoundException();
        }

        return updatedWeatherRecord;
    }

    async deleteOneById(id: string): Promise<void> {
        if (!isUUID(id)) {
            throw new NotFoundException();
        }

        // Note: Could use soft-delete instead of hard-delete
        // here, based on business requirements.
        const deleted = await this.weatherRepository.deleteOneById(id);

        if (!deleted) {
            throw new NotFoundException();
        }
    }
}
