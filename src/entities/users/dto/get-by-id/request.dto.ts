import { customValidator } from 'src/shared/validate/validator';

export class GetUserByIdRequest {
  @customValidator('', {
    message: 'user not found',
  })
  readonly userId: string;
}
