import { FC } from 'react';

import PricingPlanCard from '../../../components/Card/PricingPlanCard';

import { useFetchPricingPlans } from './hooks/useFetchPricingPlans.ts';

import cl from './styles.module.scss';

const PricingPlans: FC = () => {
  const { isLoading, pricingPlans } = useFetchPricingPlans();

  return (
    <div className={cl.wrapper}>
      {pricingPlans.map((el) => (
        <PricingPlanCard plan={el} key={el.id} />
      ))}
    </div>
  );
};

export default PricingPlans;
