import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { UsersService } from 'src/entities/users/users.service';

@ValidatorConstraint({ name: 'customValidator', async: true })
@Injectable()
export class IsPhoneExist implements ValidatorConstraintInterface {
  constructor(protected readonly usersService: UsersService) {}

  async validate(phone: string, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const countryCode = (args.object as object)[relatedPropertyName];

    if (typeof countryCode != 'undefined' && typeof phone != 'undefined') {
      return await this.usersService.phoneExist(countryCode, phone);
    } else {
      return true;
    }
  }
}
