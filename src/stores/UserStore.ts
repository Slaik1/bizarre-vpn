import { makeAutoObservable } from 'mobx';

import { getDeviceType } from '../helpers/getDeviceType';
import { Device } from '../ts/types/device';
import { User } from '../ts/types/user';

export class UserStore {
  user: N<User> = null;
  device: N<Device> = null;
  accessToken: N<string> = null;
  isAuth = false;

  constructor() {
    this.device = getDeviceType();
    makeAutoObservable(this);
  }

  setUser(user: User) {
    this.user = user;
  }

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
    this.isAuth = true;
  }

  resetUserData() {
    this.user = null;
    this.device = null;
    this.accessToken = null;
    this.isAuth = false;
  }
}
