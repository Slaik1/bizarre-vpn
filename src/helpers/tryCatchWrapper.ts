import { notifications } from '@mantine/notifications';
import { AxiosError } from 'axios';

import { isAxiosErrorGuard } from '../api/http';

type AsyncFunction<T> = (...args: any[]) => Promise<T>;

interface Options {
  errorHandler?: (error: AxiosError) => void;
  onLoadStart?: () => void;
  onLoadEnd?: () => void;
}

const tryCatchWrapper = <T>(
  cb: AsyncFunction<T>,
  options: Options = {}
): AsyncFunction<U<T>> => {
  const { onLoadStart, onLoadEnd, errorHandler } = options;

  return async function (...args: any[]): Promise<U<T>> {
    try {
      onLoadStart && onLoadStart();
      const result = await cb(...args);

      return result;
    } catch (e: unknown) {
      if (!isAxiosErrorGuard(e)) {
        if (!errorHandler) {
          notifications.show({
            title: 'Ошибка',
            //@ts-ignore
            message: e?.message || `Что-то пошло не так`,
            color: 'red',
          });

          return;
        }

        const customError = new AxiosError('Что-то пошло не так');

        customError.name = 'customError';
        errorHandler(customError);

        return;
      }

      if (!errorHandler) {
        notifications.show({
          title: 'Ошибка',
          //@ts-ignore
          message: e.response?.data?.message || `Что-то пошло не так`,
          color: 'red',
        });

        return;
      }

      errorHandler(e);
    } finally {
      onLoadEnd && onLoadEnd();
    }
  };
};

export default tryCatchWrapper;
