import { ValidationOptions, registerDecorator } from 'class-validator';
import { Type } from '@nestjs/common';
import { IsUserExistByUserId } from './user-exist-validation';
import { isEmailExist } from './email-exist-validation';

export function customValidator(
  property?: string,
  validationOptions?: ValidationOptions,
) {
  return (object: object, propertyName: string) => {
    let validateClass: Type;

    if (propertyName == 'userId') {
      validateClass = IsUserExistByUserId;
    }
    if (propertyName == 'email') {
      validateClass = isEmailExist;
    }

    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [property],
      validator: validateClass,
    });
  };
}
