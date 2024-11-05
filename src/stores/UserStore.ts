import { makeAutoObservable } from 'mobx';
import { User } from '../ts/types/user';

class UserStore {
  user: N<User> = null

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: User) {
    this.user = user;
  }
}

const userStore = new UserStore();

export default userStore;
