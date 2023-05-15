import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './users.provider';

@Module({
  imports: [],
  providers: [UsersService, ...usersProviders],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
