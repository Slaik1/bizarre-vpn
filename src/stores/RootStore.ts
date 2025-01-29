import { LayoutStore } from "./LayoutStore";
import { TelegramStore } from "./TelegramStore";
import { UserStore } from "./UserStore";

export class RootStore {
  public telegramStore: TelegramStore;
  public userStore: UserStore;
  public layoutStore: LayoutStore;

  constructor() {
    this.telegramStore = new TelegramStore();
    this.userStore = new UserStore();
    this.layoutStore = new LayoutStore();
  }
}

export const rootStore = new RootStore();
