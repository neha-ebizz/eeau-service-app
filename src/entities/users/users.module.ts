import { Module } from '@nestjs/common';

import { SharedModule } from 'src/shared/shared.module';
import { DevicesModule } from '../devices/devices.module';

import { UsersService } from './users.service';
import { DevicesService } from '../devices/devices.service';

import { UsersController } from './users.controller';

import { usersProviders } from './users.provider';
import { devicesProviders } from '../devices/devices.provider';

import { IsUserExistByUserId } from 'src/shared/validate/user-exist-validation';
import { IsEmailExist } from 'src/shared/validate/email-exist-validation';
import { IsPhoneExist } from 'src/shared/validate/phone-exist-validation';

@Module({
  imports: [SharedModule, DevicesModule],
  providers: [
    UsersService,
    DevicesService,
    ...usersProviders,
    ...devicesProviders,
    IsUserExistByUserId,
    IsEmailExist,
    IsPhoneExist,
  ],
  controllers: [UsersController],
  exports: [UsersService, DevicesService],
})
export class UsersModule {}
