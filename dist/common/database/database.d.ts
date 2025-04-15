import { EntityTarget, Repository } from 'typeorm';
export declare class Database {
    private static datasource;
    static initialize(): Promise<void>;
    static close(): Promise<void>;
    static getRepository<T>(entity: EntityTarget<T>): Repository<T>;
}
