import { Divider, Progress } from '@mantine/core';
import classNames from 'classnames';
import { t } from 'i18next';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { formatGigabytes } from '../../../../helpers/formatGigabytes/formatGigabytes';
import { getPercentage } from '../../../../helpers/getPercentage/getPercentage';
import { isNull } from '../../../../helpers/isNull';
import { UserPlan } from '../../../../ts/types/userPlan';

import cl from './UserPlanCardContent.module.scss';

interface UserPlanCardContentProps {
  data: UserPlan;
}

const UserPlanCardContent: FC<UserPlanCardContentProps> = ({ data }) => {
  const { gbTo, gbFrom, price, expiryDate, duration } = data;
  const { t: homeTranslation } = useTranslation('home');

  const getTotalGigabytes = () => {
    if (isNull(gbTo)) return '∞';

    return formatGigabytes(gbTo);
  };

  const getProgressPercentage = () => {
    const gbToValue = isNull(gbTo) ? gbFrom : gbTo;

    return getPercentage(gbFrom, gbToValue);
  };

  return (
    <div className={cl.wrapper}>
      <div className={cl.info}>
        <Progress value={getProgressPercentage()} className={cl.progress} />
        <p className={cl.traffic}>
          <span>{formatGigabytes(gbFrom)}</span>
          <span>{getTotalGigabytes()}</span>
        </p>
      </div>
      <Divider className={cl.divider} />
      <div className={classNames([cl.info, cl.priceBlock])}>
        <p className={cl.price}>
          {price} {t('currency')}
        </p>
        <div className={cl.timeWrapper}>
          <p className={cl.duration}>
            {homeTranslation('userPlanCard.duration', { duration })}
          </p>
          <p className={cl.expiry}>
            {homeTranslation('userPlanCard.expiry', { expiryDate })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPlanCardContent;
