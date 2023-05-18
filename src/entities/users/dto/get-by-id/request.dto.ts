import { userNotExistError } from 'src/shared/Services/errorService';
import { customValidator } from 'src/shared/validate/validator';

export class GetUserByIdRequest {
  @customValidator('', {
    message: userNotExistError.message,
  })
  readonly userId: string;
}
