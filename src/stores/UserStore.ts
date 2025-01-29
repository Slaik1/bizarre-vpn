import { makeAutoObservable } from 'mobx';

import { User } from '../ts/types/user';

export class UserStore {
  user: N<User> = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: User) {
    this.user = user;
  }
}
