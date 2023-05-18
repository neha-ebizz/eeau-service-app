import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './users.provider';
import { devicesProviders } from '../devices/devices.provider';
import { SharedModule } from 'src/shared/shared.module';
import { IsUserExistByUserId } from 'src/shared/validate/user-exist-validation';
import { IsEmailExist } from 'src/shared/validate/email-exist-validation';
import { IsPhoneExist } from 'src/shared/validate/phone-exist-validation';

@Module({
  imports: [SharedModule],
  providers: [
    UsersService,
    ...usersProviders,
    ...devicesProviders,
    IsUserExistByUserId,
    IsEmailExist,
    IsPhoneExist,
  ],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
