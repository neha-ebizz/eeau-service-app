import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './users.provider';
import { devicesProviders } from '../devices/devices.provider';
import { IsUserExistByUserId } from 'src/shared/validate/user-exist-validation';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [
    UsersService,
    ...usersProviders,
    ...devicesProviders,
    IsUserExistByUserId,
  ],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
