import { Divider } from '@mantine/core';
import { FC } from 'react';

import { PricingPlan } from '../../../../ts/types/pricingPlan.ts';

import cl from './styles.module.scss';

interface PricingPlanContentProps {
  data: PricingPlan;
}

const PricingPlanContent: FC<PricingPlanContentProps> = ({ data }) => {
  const {
    country,
    durationMonth,
    dataLimit,
    speedLimitGb,
    deviceLimit,
    price,
  } = data;

  const infoData = [
    {
      title: 'Лимит',
      value: dataLimit,
      postfix: 'GB',
    },
    {
      prefix: 'до',
      title: 'Скорость',
      value: speedLimitGb,
      postfix: 'МБ/С',
    },
    {
      prefix: 'до',
      title: 'Устройства',
      value: deviceLimit,
    },
    {
      title: 'Страна',
      value: country,
    },
  ];

  return (
    <div className={cl.content}>
      <div className={cl.lineDataWrapper}>
        {infoData.map(({ title, value, prefix, postfix }, i) => (
          <p className={cl.line} key={i}>
            <span className={cl.text}>{title}</span>
            <span className={cl.text}>{prefix} {value} {postfix}</span>
          </p>
        ))}
      </div>
      <Divider className={cl.divider} />

      <div className={cl.priceBlock}>
        <p className={cl.price}>{price} ₽</p>
        <p className={cl.timeDuration}>за {durationMonth} дней</p>
      </div>
    </div>
  );
};

export default PricingPlanContent;
