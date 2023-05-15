import {
  IsNumber,
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
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(passwordRegex, errorMessageInvalidPassword)
  readonly password: string;

  @IsNumber()
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
