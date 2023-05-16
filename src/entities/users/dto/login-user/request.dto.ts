import { IsNotEmpty, IsString, IsEnum, IsEmail } from 'class-validator';
import { invalidDeviceTypeError } from 'src/shared/Services/errorService';
import { deviceTypeEnum } from 'src/shared/enum/enum';

export class LoginUserRequest {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
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
