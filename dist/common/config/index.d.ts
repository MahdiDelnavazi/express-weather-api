import 'dotenv/config';
export declare const Config: {
    Server: {
        PORT: number;
    };
    Environment: {
        NAME: "development" | "production" | "local" | "test";
        IS_PRODUCTION: boolean;
        IS_DEVELOPMENT: boolean;
        IS_LOCAL: boolean;
        IS_TEST: boolean;
    };
    Database: {
        HOST: string;
        PORT: number;
        USERNAME: string;
        PASSWORD: string;
        DATABASE: string;
    };
    OpenWeatherMap: {
        GEOCODING_API_URL: string;
        API_URL: string;
        API_KEY: string;
    };
};
