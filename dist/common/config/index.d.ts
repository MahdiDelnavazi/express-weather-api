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
    Database: {};
};
