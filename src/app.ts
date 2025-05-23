import { Config } from '@common/config';
import { Database } from '@common/database';
import { WeatherController } from '@modules/weatherCore/weather/weather.controller';
import {
    errorHandler,
    catchMissingRoutes,
    transformResponse,
} from '@common/middlewares';
import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Cache } from '@common/cache';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import { AccountController } from '@modules/account/account.controller';

const swaggerSpecs = swaggerJSDoc({
    apis: ['src/modules/**/*.controller.ts', 'src/modules/**/*.dto.ts'],
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Weather API',
            version: '1.0.0',
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
    },
});

export const startServer = async () => {
    const app = express();

    // Initialize database connection
    await Database.initialize();
    console.log('Database connection established');

    // Initialize redis connection
    await Cache.connect();
    console.log('Cache connection established');

    // Middlewares
    app.use(
        cors({
            origin: '*',
        }),
    );
    app.use(compression());
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(transformResponse);
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

    // Routes
    app.use('/weather', WeatherController());
    app.use('/account', AccountController());

    // Error handler
    app.use(errorHandler);
    app.use(catchMissingRoutes);

    // Start server
    const server = app.listen(Config.Server.PORT, async (error?: Error) => {
        if (error) {
            console.error('An error occurred:');
            console.error(error);
            process.exit(1);
        }

        console.log(`Server is running on port ${Config.Server.PORT}`);
    });

    // Shutdown hook
    server.on('close', async () => {
        await Database.close();
        Cache.close();
    });

    return server;
};

if (!Config.Environment.IS_TEST) {
    void startServer();
}
