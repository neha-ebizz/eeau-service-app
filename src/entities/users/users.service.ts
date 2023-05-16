import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Op, Sequelize } from 'sequelize';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { Users } from './users.entity';

import { RegisterUserRequest } from './dto/register-user/request.dto';
import { RegisterUserResponse } from './dto/register-user/response.dto';
import { LoginUserRequest } from './dto/login-user/request.dto';

export class UsersService {
  constructor(
    private jwtService: JwtService,
    @Inject('UsersRepository')
    private readonly usersRepository: typeof Users,
  ) {}

  registerUser = async (
    reqData: RegisterUserRequest,
  ): Promise<RegisterUserResponse> => {
    const createdRecord = await this.usersRepository.create<Users>({
      firstName: reqData.firstName,
      lastName: reqData.lastName,
      email: reqData.email,
      password: bcrypt.hashSync(reqData.password, await bcrypt.genSalt()),
      countryCode: reqData.countryCode.toString(),
      phone: reqData.phone,
      address: reqData.address,
      lat: reqData.lat,
      long: reqData.long,
    });

    const token = await this.jwtService.signAsync({
      id: createdRecord.id,
    });

    const userData = await this.usersRepository.findOne<Users>({
      where: { id: createdRecord.id },
    });

    return new RegisterUserResponse(userData, 'Bearer ' + token);
  };

  loginUser = async (reqData: LoginUserRequest) => {
    const userData = await this.usersRepository.findOne<Users>({
      where: { email: reqData.email },
    });

    const token = await this.jwtService.signAsync({
      id: userData.id,
    });

    return new RegisterUserResponse(userData, 'Bearer ' + token);
  };

  findOne = async (reqData: any) => {
    return await this.usersRepository.findOne<Users>({
      where: { id: reqData.id },
    });
  };
}
