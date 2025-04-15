import { handleRoute } from '@common/helpers';
import { FetchWeatherDto, FindWeatherRecordsDto } from './dto';
import { WeatherService } from '@modules/weatherCore/weather/weather.service';
import { Router, Request, Response, NextFunction } from 'express';
import { HttpStatus } from '@common/enums';
import { UpdateWeatherRecordDto } from '@modules/weatherCore/weather/dto/updateWeatherRecord.dto';

export const WeatherController = () => {
    const router = Router();

    const weatherService = new WeatherService();

    router.get(
        '/',
        handleRoute(
            async (req: Request, res: Response, next: NextFunction) => {
                const findWeatherRecordsDto =
                    req.query as FindWeatherRecordsDto;

                const weatherRecords = await weatherService.findAll(
                    findWeatherRecordsDto,
                );

                res.status(HttpStatus.OK).send(weatherRecords);
            },
            {
                query: FindWeatherRecordsDto,
            },
        ),
    );

    router.get(
        '/:id',
        handleRoute(async (req: Request, res: Response, next: NextFunction) => {
            const id = req.params.id;

            const weatherRecord = await weatherService.findOneById(id);

            res.status(HttpStatus.OK).send(weatherRecord);
        }),
    );

    router.post(
        '/',
        handleRoute(
            async (req: Request, res: Response, next: NextFunction) => {
                const fetchWeatherDto = req.body as FetchWeatherDto;

                const weather =
                    await weatherService.fetchWeather(fetchWeatherDto);

                res.status(HttpStatus.CREATED).send(weather);
            },
            {
                body: FetchWeatherDto,
            },
        ),
    );

    router.put(
        '/:id',
        handleRoute(
            async (req: Request, res: Response, next: NextFunction) => {
                const id = req.params.id;
                const updateWeatherRecordDto =
                    req.body as UpdateWeatherRecordDto;

                const updatedWeatherRecord = await weatherService.updateOneById(
                    id,
                    updateWeatherRecordDto,
                );

                res.status(HttpStatus.OK).send(updatedWeatherRecord);
            },
            {
                body: UpdateWeatherRecordDto,
            },
        ),
    );

    return router;
};
