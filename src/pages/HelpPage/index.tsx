import { FC } from 'react';

import HelpAffix from './HelpAffix/HelpAffix';
import HelpText from './HelpText/HelpText';

const HelpPage: FC = () => {
  return (
    <>
      <HelpAffix />
      <HelpText />
    </>
  );
};

export default HelpPage;
