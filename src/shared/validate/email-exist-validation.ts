import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { emailExistError } from '../Services/errorService';
import { UsersService } from 'src/entities/users/users.service';

@ValidatorConstraint({ name: 'customValidator', async: true })
@Injectable()
export class isEmailExist implements ValidatorConstraintInterface {
  constructor(protected readonly usersService: UsersService) {}

  async validate(email: string) {
    console.log(
      'await this.usersService.emailExist(email); ',
      await this.usersService.emailExist(email),
    );

    return await this.usersService.emailExist(email);
  }
}
