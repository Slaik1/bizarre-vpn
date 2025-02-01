import { makeAutoObservable } from 'mobx';

import { getDeviceType } from '../helpers/getDeviceType';
import { Device } from '../ts/types/device';
import { User } from '../ts/types/user';

export class UserStore {
  user: N<User> = null;
  device: N<Device> = null;

  constructor() {
    this.device = getDeviceType();
    makeAutoObservable(this);
  }

  setUser(user: User) {
    this.user = user;
  }
}
