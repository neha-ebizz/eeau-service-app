import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './users.provider';
import { devicesRepository } from '../devices/devices.provider';

@Module({
  imports: [],
  providers: [UsersService, ...usersProviders, ...devicesRepository],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
