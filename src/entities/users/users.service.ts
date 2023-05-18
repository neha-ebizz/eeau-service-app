import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { Users } from './users.entity';
import { Devices } from '../devices/devices.entity';

import { RegisterUserRequest } from './dto/register-user/request.dto';
import { RegisterUserResponse } from './dto/register-user/response.dto';
import { LoginUserRequest } from './dto/login-user/request.dto';
import { GetUserByIdResponse } from './dto/get-by-id/response.dto';

@Injectable()
export class UsersService {
  constructor(
    private jwtService: JwtService,

    @Inject('UsersRepository')
    private readonly usersRepository: typeof Users,
    @Inject('DevicesRepository')
    private readonly devicesRepository: typeof Devices,
  ) {}

  /**
   * registration
   * @param reqData
   * @returns
   */
  registerUser = async (
    reqData: RegisterUserRequest,
  ): Promise<RegisterUserResponse> => {
    const createdUser = await this.usersRepository.create<Users>({
      firstName: reqData.firstName,
      lastName: reqData.lastName,
      email: reqData.email,
      password: bcrypt.hashSync(reqData.password, await bcrypt.genSalt()),
      countryCode: reqData.countryCode,
      phone: reqData.phone,
      address: reqData.address,
      lat: reqData.lat,
      long: reqData.long,
    });

    await this.devicesRepository.create<Devices>({
      userId: createdUser.id,
      fcm: reqData.fcm,
      deviceId: reqData.deviceId,
      deviceType: reqData.deviceType,
    });

    const token = await this.jwtService.signAsync({
      id: createdUser.id,
    });

    const userData = await this.usersRepository.findOne<Users>({
      where: { id: createdUser.id },
    });

    return new RegisterUserResponse(userData, 'Bearer ' + token);
  };

  /**
   * login
   * @param reqData
   * @returns
   */
  loginUser = async (reqData: LoginUserRequest) => {
    const userData = await this.usersRepository.findOne<Users>({
      where: { email: reqData.email },
    });

    await this.devicesRepository.create<Devices>({
      userId: userData.id,
      fcm: reqData.fcm,
      deviceId: reqData.deviceId,
      deviceType: reqData.deviceType,
    });

    const token = await this.jwtService.signAsync({
      id: userData.id,
    });

    return new RegisterUserResponse(userData, 'Bearer ' + token);
  };

  /**
   * authentication
   * @param reqData
   * @returns
   */
  auth = async (id: number) => {
    return await this.usersRepository.findOne<Users>({
      where: { id: id },
      include: [
        {
          model: Devices,
          as: 'devices',
          required: true,
        },
      ],
    });
  };

  getById = async (id: string) => {
    const userData = await this.usersRepository.findOne<Users>({
      where: { id: id },
    });
    return userData ? new GetUserByIdResponse(userData) : false;
  };

  userExist = async (id: string) => {
    const userData = await this.usersRepository.findOne<Users>({
      where: { id: id },
    });
    return userData ? true : false;
  };

  emailExist = async (email: string) => {
    const emailExist = await this.usersRepository.findOne<Users>({
      where: { email: email },
    });
    return emailExist ? false : true;
  };

  phoneExist = async (countryCode: number, phone: bigint) => {
    const phoneExist = await this.usersRepository.findOne<Users>({
      where: {
        countryCode: countryCode,
        phone: phone,
      },
    });
    return phoneExist ? false : true;
  };
}
