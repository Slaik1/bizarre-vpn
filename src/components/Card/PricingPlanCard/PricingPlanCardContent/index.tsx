import { Divider } from '@mantine/core';
import { t } from 'i18next';
import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { PricingPlan } from '../../../../ts/types/pricingPlan.ts';

import { getInfoDataArr } from './helpers.ts';

import cl from './PricingPlanCardContent.module.scss';

interface PricingPlanContentProps {
  data: PricingPlan;
}

const PricingPlanContent: FC<PricingPlanContentProps> = ({ data }) => {
  const { t: storeTranslation } = useTranslation('store');
  const { durationMonth, price } = data;

  const infoData = useMemo(() => getInfoDataArr(data, storeTranslation), [data]);

  return (
    <div className={cl.content}>
      <div className={cl.pricingPlanInfo}>
        {infoData.map(({ title, value }, i) => (
          <div className={cl.line} key={i}>
            <p className={cl.text}>{title}</p>
            <p className={cl.text}>{value}</p>
          </div>
        ))}
      </div>
      <Divider className={cl.divider} />
      <div className={cl.priceBlock}>
        <p className={cl.price}>
          {price} {t('currency')}
        </p>
        <p className={cl.timeDuration}>
          {storeTranslation('pricingPlanCard.duration', { durationMonth })}
        </p>
      </div>
    </div>
  );
};

export default PricingPlanContent;
