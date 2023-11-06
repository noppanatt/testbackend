import { DataSource, DataSourceOptions } from "typeorm";
import * as path from 'path';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'bdms_rf_db',
  synchronize: true,
  entities: [path.resolve('dist/database/entities//*.entity.js')],
  migrations: [path.resolve('dist/database/migrations//.js')],
};

export default new DataSource(dataSourceOptions);