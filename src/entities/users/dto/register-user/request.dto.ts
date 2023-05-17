import {
  IsNotEmpty,
  IsString,
  Matches,
  IsEnum,
  IsEmail,
} from 'class-validator';
import { passwordRegex } from 'src/shared/constants/regex';
import {
  errorMessageInvalidPassword,
  invalidDeviceTypeError,
} from 'src/shared/Services/errorService';
import { deviceTypeEnum } from 'src/shared/enum/enum';
import { customValidator } from 'src/shared/validate/validator';

export class RegisterUserRequest {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @customValidator('', {
    message: 'email exist',
  })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(passwordRegex, errorMessageInvalidPassword)
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly countryCode: string;

  @IsString()
  @IsNotEmpty()
  readonly phone: string;

  @IsString()
  @IsNotEmpty()
  readonly address: string;

  @IsString()
  @IsNotEmpty()
  readonly lat: string;

  @IsString()
  @IsNotEmpty()
  readonly long: string;

  @IsString()
  @IsNotEmpty()
  readonly fcm: string;

  @IsString()
  @IsNotEmpty()
  readonly deviceId: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(deviceTypeEnum, invalidDeviceTypeError)
  readonly deviceType: string;
}
