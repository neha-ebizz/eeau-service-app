import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsersService } from 'src/entities/users/users.service';

@ValidatorConstraint({ name: 'customValidator', async: true })
@Injectable()
export class IsEmailExist implements ValidatorConstraintInterface {
  constructor(protected readonly usersService: UsersService) {}

  async validate(email: string, args: ValidationArguments) {
    let requestType: number;

    if (args.targetName == 'RegisterUserRequest') {
      requestType = 0;
    } else {
      requestType = 1;
    }

    return await this.usersService.emailExist(email, requestType);
  }
}
