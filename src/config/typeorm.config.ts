import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5454,
  username: 'postgres',
  password: 'postgres',
  database: 'taskmanagment',
  entities: [__dirname + '/../**/*.entity.*s'],
  synchronize: true,
};
