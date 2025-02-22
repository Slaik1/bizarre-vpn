import { observer } from 'mobx-react-lite';
import { FC } from 'react';

import RoutesComponent from '../hoc/RoutesComponent';
import ThemeProvider from '../ThemeProvider';

import { useInitApp } from './hooks/useInitApp';

const App: FC = () => {
  const isLoading = useInitApp();

  if (isLoading) return null;

  return (
    <ThemeProvider>
      <RoutesComponent />
    </ThemeProvider>
  );
};

export default observer(App);
