import { useEffect, useState } from 'react';

import { rootStore } from '../../../../stores/RootStore';

export const useAffixScroll = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!rootStore.layoutStore.mainRef?.current) return;
      const scrollTop = rootStore.layoutStore.mainRef.current.scrollTop;

      setIsShow(scrollTop > 0);
    };

    if (!rootStore.layoutStore.mainRef) return;

    const element = rootStore.layoutStore.mainRef.current;

    if (element) {
      element.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (element) {
        element.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollTop = () => {
    if (!rootStore.layoutStore.mainRef?.current) return;

    rootStore.layoutStore.mainRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return { isShow, scrollTop };
};
