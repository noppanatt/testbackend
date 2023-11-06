import * as path from 'path'
import * as dotenv from 'dotenv'


module.exports = {
  name: 'default',
  type: 'postgres',
  host: "localhost",
  port: 5432,
  database: "bdms_rf_db",
  username: "postgres",
  password: "1234",
  synchronize: false,
  migrationsRun: true,
  entities: [path.resolve('src/database/entities//*.entity.ts')],
  autoLoadEntities: true,
  migrations: [path.resolve('src/database/migrations//.ts')],
  cli: {
    entitiesDir: '~entities',
    migrationsDir: 'src/database/migrations'
  },
  ssl: false,
  seeds: [path.resolve('src/database/seeds/**/.seed.ts')],
  factories: [path.resolve('src/database/factories/*/.factory.ts')]
}