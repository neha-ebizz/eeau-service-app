import { IsNotEmpty, IsString, IsEnum, IsEmail } from 'class-validator';
import {
  emailDoesntExistError,
  invalidDeviceTypeError,
} from 'src/shared/Services/errorService';
import { deviceTypeEnum } from 'src/shared/enum/enum';
import { customValidator } from 'src/shared/validate/validator';

export class LoginUserRequest {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @customValidator('', {
    message: emailDoesntExistError.message,
  })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

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
