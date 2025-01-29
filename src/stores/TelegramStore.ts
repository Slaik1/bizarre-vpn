import { FALLBACK_LANGUAGE } from '../constants/user';
import notify from '../utils/notify';

export class TelegramStore {
  public tg = window.Telegram.WebApp;
  public user = this.tg.initDataUnsafe?.user;

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
