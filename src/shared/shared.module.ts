import { ConfigService } from 'src/database/connection';
import { Global, Module } from '@nestjs/common';
import { usersProviders } from 'src/entities/users/users.provider';
import { devicesProviders } from 'src/entities/devices/devices.provider';
import { UsersService } from 'src/entities/users/users.service';

import { IsUserExistByUserId } from './validate/user-exist-validation';
import { IsEmailExist } from './validate/email-exist-validation';
import { IsPhoneExist } from './validate/phone-exist-validation';
import { DevicesService } from 'src/entities/devices/devices.service';

@Global()
@Module({
  imports: [],
  providers: [
    UsersService,
    DevicesService,
    IsUserExistByUserId,
    IsEmailExist,
    IsPhoneExist,
    ...usersProviders,
    ...devicesProviders,
    ConfigService,
  ],
  exports: [
    IsUserExistByUserId,
    IsEmailExist,
    IsPhoneExist,
    ConfigService,
    ...usersProviders,
    ...devicesProviders,
  ],
  controllers: [],
})
export class SharedModule {}
