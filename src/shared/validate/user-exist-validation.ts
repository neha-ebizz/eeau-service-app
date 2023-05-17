import { UsersService } from 'src/entities/users/users.service';
import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'customValidator', async: true })
@Injectable()
export class IsUserExistByUserId implements ValidatorConstraintInterface {
  constructor(protected readonly usersService: UsersService) {}

  async validate(userId: string) {
    return await this.usersService.userExist(userId);
  }
}
