import { Config } from '@common/config';
import { Database } from '@common/database';
import { WeatherController } from '@modules/weatherCore/weather/weather.controller';
import { errorHandler } from '@common/middlewares';
import express from 'express';

const startServer = async () => {
    const app = express();

    // Initialize database connection
    await Database.initialize();
    console.log('Database connection established');

    // Middlewares
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Routes
    app.use('/weather', WeatherController());

    // Error handler
    app.use(errorHandler);

    // Start server
    app.listen(Config.Server.PORT, async (error?: Error) => {
        if (error) {
            console.error('An error occurred:');
            console.error(error);
            process.exit(1);
        }

        console.log(`Server is running on port ${Config.Server.PORT}`);
    });

    // Shutdown hook
    process.on('exit', async () => {
        await Database.close();
    });
};

void startServer();
