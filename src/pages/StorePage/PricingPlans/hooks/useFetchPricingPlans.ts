import { useEffect, useState } from 'react';

import tryCatchWrapper from '../../../../helpers/tryCatchWrapper.ts';
import { PricingPlan } from '../../../../ts/types/pricingPlan.ts';

import { PLANS } from './mock.ts';

export const useFetchPricingPlans = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>(PLANS);

  const fetchPricingPlans = async () => {
    tryCatchWrapper(
      async () => {
        setPricingPlans(PLANS);
      },
      { setIsLoading: setIsLoading }
    );
  };

  useEffect(() => {
    fetchPricingPlans();
  }, []);

  return { isLoading, pricingPlans };
};
