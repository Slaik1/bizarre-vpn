import { Button } from '@mantine/core';
import { FC, MouseEvent, ReactNode } from 'react';

import cl from './CardContainer.module.scss';

interface CardContainerProps {
  title: string;
  buttonTitle: string | ReactNode;
  buttonHandler: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

const CardContainer: FC<CardContainerProps> = ({
  title,
  buttonTitle,
  buttonHandler,
  children,
}) => {
  return (
    <div className={cl.container}>
      <h2 className={cl.title}>{title}</h2>
      {children}
      <Button className={cl.button} onClick={buttonHandler}>
        {buttonTitle}
      </Button>
    </div>
  );
};

export default CardContainer;
