import { Controller, Post, HttpCode, Body, UseFilters } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

import { AllExceptionsFilter } from 'src/shared/exception/httpException';

import { UsersService } from './users.service';

import { Users } from './users.entity';

import { RegisterUserRequest } from './dto/register-user/request.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseFilters(AllExceptionsFilter)
  @HttpCode(200)
  public async registerUser(@Body() reqData: RegisterUserRequest) {
    return this.usersService.registerUser(reqData);
  }
}
