import { ConfigService } from 'src/database/connection';
import { Global, Module } from '@nestjs/common';
import { usersProviders } from 'src/entities/users/users.provider';
import { devicesProviders } from 'src/entities/devices/devices.provider';
import { UsersService } from 'src/entities/users/users.service';

import { IsUserExistByUserId } from './validate/user-exist-validation';
import { isEmailExist } from './validate/email-exist-validation';

@Global()
@Module({
  imports: [],
  providers: [
    UsersService,
    IsUserExistByUserId,
    isEmailExist,
    ...usersProviders,
    ...devicesProviders,
    ConfigService,
  ],
  exports: [
    IsUserExistByUserId,
    isEmailExist,
    ConfigService,
    ...usersProviders,
    ...devicesProviders,
  ],
  controllers: [],
})
export class SharedModule {}
