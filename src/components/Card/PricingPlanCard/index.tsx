import { FC } from 'react';

import { PricingPlan } from '../../../ts/types/pricingPlan.ts';
import notify from '../../../utils/notify.ts';
import CardContainer from '../common/CardContainer';

import PricingPlanContent from './PricingPlanCardContent/index.tsx';

interface PricingPlanProps {
  plan: PricingPlan;
}

const PricingPlanCard: FC<PricingPlanProps> = ({ plan }) => {
  const { name } = plan;

  return (
    <CardContainer
      title={name}
      buttonHandler={() => notify.success('Bought')}
      buttonTitle="Оформить подписку"
    >
      <PricingPlanContent data={plan} />
    </CardContainer>
  );
};

export default PricingPlanCard;
