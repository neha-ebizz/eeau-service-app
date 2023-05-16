import {
  Controller,
  Post,
  HttpCode,
  Body,
  UseFilters,
  Get,
  UseGuards,
  Param,
} from '@nestjs/common';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { Express } from 'express';
import { AuthGuard } from '../auth/auth.guard';

import { AllExceptionsFilter } from 'src/shared/exception/httpException';

import { UsersService } from './users.service';

import { RegisterUserRequest } from './dto/register-user/request.dto';
import { RegisterUserResponse } from './dto/register-user/response.dto';
import { LoginUserRequest } from './dto/login-user/request.dto';
import { GetUserByIdRequest } from './dto/get-by-id/request.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * registration
   * @param reqData
   * @returns
   */
  @Post()
  @UseFilters(AllExceptionsFilter)
  @HttpCode(200)
  public async registerUser(
    @Body() reqData: RegisterUserRequest,
  ): Promise<RegisterUserResponse> {
    return this.usersService.registerUser(reqData);
  }

  /**
   * login
   * @param reqData
   * @returns
   */
  @Post('login')
  @UseFilters(AllExceptionsFilter)
  @HttpCode(200)
  public async loginUser(
    @Body() reqData: LoginUserRequest,
  ): Promise<RegisterUserResponse> {
    return this.usersService.loginUser(reqData);
  }

  /**
   * get by id
   * @param reqData
   * @returns
   */
  @UseGuards(AuthGuard)
  @Get(':userId')
  @UseFilters(AllExceptionsFilter)
  @HttpCode(200)
  public async getUserById(@Param() reqData: GetUserByIdRequest) {
    return await this.usersService.getById(reqData.userId);
  }
}
