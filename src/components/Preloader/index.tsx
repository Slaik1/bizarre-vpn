import Lottie from 'lottie-react';
import { FC, useEffect, useState } from 'react';

import loading from '../../assets/lottie/loading1.json';
import styles from './styles.module.scss';

interface PreloaderProps {
  delay?: number;
}

const Preloader: FC<PreloaderProps> = ({ delay = 300 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

	if(!show) return null

  return (
    <div className={styles.preloader}>
      <Lottie animationData={loading} loop className={styles.animation} />
    </div>
  );
};

export default Preloader;
