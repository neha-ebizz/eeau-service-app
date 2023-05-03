import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { ConfigService } from './connection';

@Module({
  providers: [...databaseProviders, ConfigService],
  exports: [...databaseProviders, ConfigService],
})
export class DatabaseModule {}
