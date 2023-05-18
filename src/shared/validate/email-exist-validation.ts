import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
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
    const [relatedPropertyName] = args.constraints;
    const password = (args.object as object)[relatedPropertyName];

    const userData = await this.usersService.emailExist(email);

    if (args.targetName == 'RegisterUserRequest') {
      return userData ? false : true;
    } else {
      if (userData) {
        console.log(userData.password);

        const passwordMatch = await bcrypt.compare(password, userData.password);
        if (passwordMatch == false) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    }
  }
}
