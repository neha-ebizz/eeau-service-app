import { UserDTO } from '../users.dto';
import { Users } from '../../users.entity';

export class GetUserByIdResponse extends UserDTO {
  constructor(users: Users) {
    super(users);
  }
}
