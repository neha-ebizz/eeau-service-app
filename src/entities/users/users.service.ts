import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Op, Sequelize } from 'sequelize';
import * as bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

console.log('jsonwebtoken ', jsonwebtoken);

import { Users } from './users.entity';

import { RegisterUserRequest } from './dto/register-user/request.dto';

export class UsersService {
  constructor(
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

    const token = jsonwebtoken.sign(
      { userId: createdRecord.id, email: createdRecord.email },
      process.env.JSON_WEB_TOKEN_SECRET_KEY,
    );

    return token;
  };
}
