import { useEffect, useState } from "react";

import layoutStore from "../../../../stores/LayoutStore";

export const useAffixScroll = () => {
	const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!layoutStore.mainRef?.current) return;
      const scrollTop = layoutStore.mainRef.current.scrollTop;

      setIsShow(scrollTop > 0);
    };

    const element = layoutStore.mainRef.current;

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
    if (!layoutStore.mainRef?.current) return;

    layoutStore.mainRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

	return {isShow, scrollTop}
}