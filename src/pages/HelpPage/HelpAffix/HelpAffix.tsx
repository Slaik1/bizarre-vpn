import { Affix, Transition } from '@mantine/core';
import { FaArrowUpLong } from 'react-icons/fa6';

import { useAffixScroll } from './hooks/useAffixScroll';

import styles from './HelpAffix.module.scss';

const HelpAffix = () => {
  const { isShow, scrollTop } = useAffixScroll();

  return (
    <Affix position={{ bottom: 70, right: 15 }}>
      <Transition transition="slide-left" mounted={isShow}>
        {(transitionStyles) => (
          <div
            className={styles.topButton}
            onClick={scrollTop}
            style={transitionStyles}
          >
            <FaArrowUpLong size={20} className={styles.arrowIcon} />
          </div>
        )}
      </Transition>
    </Affix>
  );
};

export default HelpAffix;
