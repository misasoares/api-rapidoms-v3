import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('Application');

  logger.log('App started at http://localhost:8080/api');

  app.setGlobalPrefix('api');

  app.enableCors();

  await app.listen(8080);
}
bootstrap();
