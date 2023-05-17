import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './users.provider';
import { devicesProviders } from '../devices/devices.provider';
import { SharedModule } from 'src/shared/shared.module';
import { IsUserExistByUserId } from 'src/shared/validate/user-exist-validation';
import { isEmailExist } from 'src/shared/validate/email-exist-validation';

@Module({
  imports: [SharedModule],
  providers: [
    UsersService,
    ...usersProviders,
    ...devicesProviders,
    IsUserExistByUserId,
    isEmailExist,
  ],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
