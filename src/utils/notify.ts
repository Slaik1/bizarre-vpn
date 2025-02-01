// eslint-disable-next-line import/named
import { NotificationProps } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

type NotifyOptions = Omit<NotificationProps, 'title' | 'color'>;

interface Notify {
  success: (title: string, options?: NotifyOptions) => void;
  error: (title: string, options?: NotifyOptions) => void;
  info: (title: string, options?: NotifyOptions) => void;
  warning: (title: string, options?: NotifyOptions) => void;
}

const notify: Notify = {
  success: (title, options) =>
    showNotification({
      title,
      message: '',
      color: 'green',
      ...options,
    }),

  error: (title, options) =>
    showNotification({
      title,
      message: '',
      color: 'red',
      ...options,
    }),

  info: (title, options) =>
    showNotification({
      title,
      message: '',
      color: 'blue',
      ...options,
    }),

  warning: (title, options) =>
    showNotification({
      title,
      message: '',
      color: 'yellow',
      ...options,
    }),
};

export default notify;
