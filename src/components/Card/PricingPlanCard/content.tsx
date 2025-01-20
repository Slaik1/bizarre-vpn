import { FC } from 'react';
import { PricingPlan } from '../../../ts/types/pricingPlan.ts';
import cl from './styles.module.scss';
import { Divider } from '@mantine/core';

interface PricingPlanContentProps {
  data: PricingPlan;
}

const PricingPlanContent: FC<PricingPlanContentProps> = ({ data }) => {
  const { country, durationMonth, dataLimit, speedLimitGb, deviceLimit,price,  } = data;

  const infoData = [
    {
      title: 'Лимит',
      value: dataLimit,
    },
    {
      title: 'Скорость',
      value: speedLimitGb,
    },
    {
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
        {infoData.map(({ title, value }, i) => (
          <p className={cl.line} key={i}>
            <span className={cl.text}>{title}</span>
            <span className={cl.text}>{value}</span>
          </p>
        ))}
      </div>
      <Divider className={cl.divider} />

      <div className={cl.priceBlock}>
        <p className={cl.price}>{price}</p>
        <p className={cl.timeDuration}>за 30 дней</p>
      </div>
    </div>
  );
};

export default PricingPlanContent;
