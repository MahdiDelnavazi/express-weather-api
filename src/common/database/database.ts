import { Config } from '@common/config';
import { DataSource, EntityTarget, Repository } from 'typeorm';
import * as path from 'node:path';

export class Database {
    private static datasource: DataSource;

    static async initialize(): Promise<void> {
        if (Database.datasource) {
            return;
        }

        Database.datasource = new DataSource({
            type: 'postgres',
            host: Config.Database.HOST,
            port: Config.Database.PORT,
            username: Config.Database.USERNAME,
            password: Config.Database.PASSWORD,
            database: Config.Database.DATABASE,
            entities: [
                path.join(__dirname, '../../modules/**/**/*.entity.{ts,js}'),
            ],
            synchronize: !Config.Environment.IS_PRODUCTION,
        });

        await Database.datasource.initialize();
    }

    static async close(): Promise<void> {
        await Database.datasource.destroy();
    }

    static getRepository<T>(entity: EntityTarget<T>): Repository<T> {
        return Database.datasource.getRepository(entity);
    }
}
