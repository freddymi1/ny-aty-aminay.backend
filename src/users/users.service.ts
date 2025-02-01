import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers(): any[] {
    const users = [
      {
        id: 1,
        name: 'Freddy Michel',
      },
      {
        id: 2,
        name: 'Jessica Ram',
      },
    ];
    return users;
  }
}
