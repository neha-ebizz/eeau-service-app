import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UsersService } from 'src/entities/users/users.service';

@ValidatorConstraint({ name: 'customValidator', async: true })
@Injectable()
export class IsEmailExist implements ValidatorConstraintInterface {
  constructor(protected readonly usersService: UsersService) {}

  async validate(email: string) {
    return await this.usersService.emailExist(email);
  }
}
