import { Device } from '../ts/types/device';

export const getDeviceType = (): Device => {
  const userAgent = navigator.userAgent.toLowerCase();

  if (/mobile|android|iphone|ipad|ipod|windows phone/.test(userAgent)) {
    return 'phone';
  }

  return 'desktop';
};
