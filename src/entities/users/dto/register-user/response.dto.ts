import { UserDTO } from '../users.dto';
import { Users } from '../../users.entity';

export class RegisterUserResponse extends UserDTO {
  token: string;

  constructor(users: Users, token?: string) {
    super(users);
    this.token = token;
  }
}
