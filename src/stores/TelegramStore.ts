import { FALLBACK_LANGUAGE } from '../constants/user';
import notify from '../utils/notify';

export class TelegramStore {
  //@ts-ignore
  public tg = window.Telegram.WebApp;
  public user = this.tg.initDataUnsafe?.user;
  public isTelegramWebApp =
    typeof this.tg !== undefined && Boolean(this.tg.initData);

  public setAppReady = () => {
    this.tg.ready();
  };

  public closeApp = () => {
    this.tg.close();
  };

  public setAppFullScreen = () => {
    try {
      this.tg?.requestFullscreen();
    } catch (error) {
      notify.error('requestFullscreen error');
    }
  };

  public getUserLanguage = () => {
    return this.user?.language_code || FALLBACK_LANGUAGE;
  };
}
