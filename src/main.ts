import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get('server');

  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  const port: number = process.env.PORT || serverConfig.port;
  app.enableCors();

  await app.listen(port);

  const env: string = process.env.NODE_ENV;
  logger.log(
    `Application listening on port ${serverConfig.port} on ${env} mode`,
  );
}
bootstrap();
