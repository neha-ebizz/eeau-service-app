import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Op, Sequelize } from 'sequelize';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { Users } from './users.entity';

import { RegisterUserRequest } from './dto/register-user/request.dto';

export class UsersService {
  constructor(
    private jwtService: JwtService,
    @Inject('UsersRepository')
    private readonly usersRepository: typeof Users,
  ) {}

  registerUser = async (reqData: RegisterUserRequest) => {
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

    const payload = {
      id: createdRecord.id,
    };
    var access_token = await this.jwtService.signAsync(payload);

    return access_token;
  };

  loginUser = async (reqData: RegisterUserRequest) => {
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

    const payload = {
      id: createdRecord.id,
    };
    var access_token = await this.jwtService.signAsync(payload);

    return access_token;
  };

  findOne = async (reqData: any) => {
    return await this.usersRepository.findOne<Users>({
      where: { id: reqData.id },
    });
  };
}
