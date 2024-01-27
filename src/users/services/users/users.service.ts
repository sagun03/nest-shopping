import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private fakeUsers = [{ username: 'sagun', email: 'sagunsaluja@gmil.com' }];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(user) {
    return (this.fakeUsers = [...this.fakeUsers, user]);
  }
}
