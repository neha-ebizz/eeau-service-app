import { ConfigService } from 'src/database/connection';
import { Global, Module } from '@nestjs/common';
import { IsUserExistByUserId } from './validate/user-exist-validation';
import { usersProviders } from 'src/entities/users/users.provider';
import { devicesProviders } from 'src/entities/devices/devices.provider';
import { UsersService } from 'src/entities/users/users.service';

@Global()
@Module({
  imports: [],
  providers: [
    UsersService,
    IsUserExistByUserId,
    ...usersProviders,
    ...devicesProviders,
    ConfigService,
  ],
  exports: [
    IsUserExistByUserId,
    ConfigService,
    ...usersProviders,
    ...devicesProviders,
  ],
  controllers: [],
})
export class SharedModule {}
