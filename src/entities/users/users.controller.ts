import {
  Controller,
  Post,
  HttpCode,
  Body,
  UseFilters,
  Get,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { AuthGuard } from '../auth/auth.guard';

import { AllExceptionsFilter } from 'src/shared/exception/httpException';

import { UsersService } from './users.service';

import { Users } from './users.entity';

import { RegisterUserRequest } from './dto/register-user/request.dto';
import { RegisterUserResponse } from './dto/register-user/response.dto';
import { LoginUserRequest } from './dto/login-user/request.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseFilters(AllExceptionsFilter)
  @HttpCode(200)
  public async registerUser(
    @Body() reqData: RegisterUserRequest,
  ): Promise<RegisterUserResponse> {
    return this.usersService.registerUser(reqData);
  }

  @Post('login')
  @UseFilters(AllExceptionsFilter)
  @HttpCode(200)
  public async loginUser(
    @Body() reqData: LoginUserRequest,
  ): Promise<RegisterUserResponse> {
    return this.usersService.loginUser(reqData);
  }

  @UseGuards(AuthGuard)
  @Get()
  @UseFilters(AllExceptionsFilter)
  @HttpCode(200)
  public async GetById(@Body() reqData: any) {
    return this.usersService.findOne(reqData);
  }
}
