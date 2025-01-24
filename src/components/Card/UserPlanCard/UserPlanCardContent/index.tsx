import { Divider, Progress } from '@mantine/core';
import { FC } from 'react';

import { getPercentage } from '../../../../helpers/getPercentage';
import { UserPlan } from '../../../../ts/types/userPlan';

import cl from './styles.module.scss';
import classNames from 'classnames';

interface UserPlanCardContentProps {
  data: UserPlan;
}

const UserPlanCardContent: FC<UserPlanCardContentProps> = ({ data }) => {
  const { gbTo, gbFrom, price, expiryDate, duration } = data;

  return (
    <div className={cl.wrapper}>
      <div className={cl.info}>
        <Progress value={getPercentage(gbFrom, gbTo)} className={cl.progress} />
        <p className={cl.traffic}>
          <span>{gbFrom} GB</span>
          <span>{gbTo} GB</span>
        </p>
      </div>

      <Divider className={cl.divider} />

      <div className={classNames([cl.info, cl.priceBlock])}>
        <p className={cl.price}>{price} ₽</p>
        <div className={cl.timeWrapper}>
          <p className={cl.duration}>За {duration} дней</p>
          <p className={cl.expiry}>Оплачен до {expiryDate}</p>
        </div>
      </div>
    </div>
  );
};

export default UserPlanCardContent;
