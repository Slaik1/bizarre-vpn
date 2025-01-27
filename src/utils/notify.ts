// eslint-disable-next-line import/named
import { NotificationProps } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { t } from 'i18next';

type NotifyOptions = Omit<NotificationProps, 'title' | 'message' | 'color'>;

interface Notify {
  success: (message: string, title?: string, options?: NotifyOptions) => void;
  error: (message: string, title?: string, options?: NotifyOptions) => void;
  info: (message: string, title?: string, options?: NotifyOptions) => void;
  warning: (message: string, title?: string, options?: NotifyOptions) => void;
}

const notify: Notify = {
  success: (message, title = t('general.status.success'), options) =>
    showNotification({
      title,
      message,
      color: 'green',
      ...options,
    }),

  error: (message, title = t('general.status.error'), options) =>
    showNotification({
      title,
      message,
      color: 'red',
      ...options,
    }),

  info: (message, title = t('general.status.info'), options) =>
    showNotification({
      title,
      message,
      color: 'blue',
      ...options,
    }),

  warning: (message, title = t('general.status.warning'), options) =>
    showNotification({
      title,
      message,
      color: 'yellow',
      ...options,
    }),
};

export default notify;
