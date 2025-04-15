import { handleRoute } from '@common/helpers';
import { FetchWeatherDto } from './dto';
import { WeatherService } from '@modules/weatherCore/weather/weather.service';
import { Router, Request, Response, NextFunction } from 'express';

export const WeatherController = () => {
    const router = Router();

    const weatherService = new WeatherService();

    router.post(
        '/',
        handleRoute(
            async (req: Request, res: Response, next: NextFunction) => {
                const fetchWeatherDto = req.body as FetchWeatherDto;

                const weather =
                    await weatherService.fetchWeather(fetchWeatherDto);

                res.status(200).send(weather);
            },
            {
                body: FetchWeatherDto,
            },
        ),
    );

    return router;
};
