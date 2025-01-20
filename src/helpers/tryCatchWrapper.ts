import { AxiosError } from 'axios';
import { isAxiosErrorGuard } from '../api/http.ts';
import notify from '../utils/notify.ts';

type AsyncFunction<T> = (...args: any[]) => Promise<T>;
interface Options {
  setIsLoading?: SetState<boolean>;
  onLoadStart?: () => void;
  onLoadEnd?: () => void;
  errorHandler?: (error: AxiosError) => void;
}

const tryCatchWrapper = <T>(
  cb: AsyncFunction<T>,
  options: Options = {}
): AsyncFunction<U<T>> => {
  const { setIsLoading, onLoadStart, onLoadEnd, errorHandler } = options;

  return async function (...args: any[]): Promise<U<T>> {
    try {
      onLoadStart && onLoadStart();
      setIsLoading && setIsLoading(true);
      const result = await cb(...args);

      return result;
    } catch (e: unknown) {
      if (isAxiosErrorGuard(e)) {
        if (!errorHandler) {
          //@ts-ignore
          const errorMessage = e.response?.data?.message ?? 'Server Error';

          notify.error(errorMessage);
        } else {
          errorHandler(e);
        }

        return;
      }
      if (errorHandler) {
        const customError = new AxiosError('Error');

        customError.name = 'customError';
        errorHandler(customError);
      }
    } finally {
      onLoadEnd && onLoadEnd();
      setIsLoading && setIsLoading(false);
    }
  };
};

export default tryCatchWrapper;
