import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config as configBase } from './config';
import { ValidationPipe } from '@nestjs/common';
import { config } from 'dotenv';
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(configBase().PORT, () => {
    console.log('Server is running on port: ' + Number(configBase().PORT));
  });
}
bootstrap();
