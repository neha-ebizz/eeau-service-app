import {
  IsNotEmpty,
  IsString,
  Matches,
  IsEnum,
  IsEmail,
  IsNumber,
} from 'class-validator';
import { passwordRegex } from 'src/shared/constants/regex';
import {
  invalidPasswordError,
  invalidDeviceTypeError,
  emailInUseError,
  phoneInUseError,
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
    message: emailInUseError.message,
  })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(passwordRegex, invalidPasswordError)
  readonly password: string;

  @IsNumber()
  @IsNotEmpty()
  readonly countryCode: number;

  @IsNumber()
  @IsNotEmpty()
  @customValidator('countryCode', {
    message: phoneInUseError.message,
  })
  readonly phone: bigint;

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
