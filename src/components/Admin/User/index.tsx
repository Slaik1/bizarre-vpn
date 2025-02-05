import { Badge } from '@mantine/core';
import { FC, useState } from 'react';

import { User as UserType } from '../../../ts/types/user';

import cl from './User.module.scss';

interface UserProps {
  data: UserType;
}

const User: FC<UserProps> = ({ data }) => {
  const { username, id, role } = data;
  const [isShifted, setIsShifted] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [currentX, setCurrentX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startX !== null) {
      setCurrentX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (startX !== null && currentX !== null) {
      const deltaX = startX - currentX;

      if (deltaX > 50) {
        // Если свайп влево больше 50px, сдвигаем компонент
        setIsShifted(true);
      } else if (deltaX < -50) {
        // Если свайп вправо больше 50px, возвращаем компонент
        setIsShifted(false);
      }
    }
    setStartX(null);
    setCurrentX(null);
  };

  return (
    <div
      className={`${cl.user} ${isShifted ? cl.shifted : ''}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={() => setIsShifted((prev) => !prev)}
    >
      <div className={cl.content}>
        <p className={cl.id}>{id}</p>
        <p className={cl.username}>{username}</p>
        {role === 'admin' && <Badge color="var(--primary-color)">{role}</Badge>}
      </div>
      <div className={cl.buttons}>
        <div className={cl.actionButton}>Edit</div>
        <div className={cl.actionButton}>Delete</div>
      </div>
    </div>
  );
};

export default User;
