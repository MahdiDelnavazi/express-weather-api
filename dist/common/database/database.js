"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const config_1 = require("../config");
const typeorm_1 = require("typeorm");
class Database {
    static async initialize() {
        if (Database.datasource) {
            return;
        }
        Database.datasource = new typeorm_1.DataSource({
            type: 'postgres',
            host: config_1.Config.Database.HOST,
            port: config_1.Config.Database.PORT,
            username: config_1.Config.Database.USERNAME,
            password: config_1.Config.Database.PASSWORD,
            database: config_1.Config.Database.DATABASE,
            entities: ['src/**/*.entity.ts'],
            synchronize: true,
        });
        await Database.datasource.initialize();
    }
    static async close() {
        await Database.datasource.destroy();
    }
    static getRepository(entity) {
        return Database.datasource.getRepository(entity);
    }
}
exports.Database = Database;
//# sourceMappingURL=database.js.map