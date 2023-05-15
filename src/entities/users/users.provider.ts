import { Users } from './users.entity';

export const usersProviders = [{ provide: 'UsersRepository', useValue: Users }];
