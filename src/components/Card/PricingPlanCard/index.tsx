import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IoWalletOutline } from 'react-icons/io5';

import { PricingPlan } from '../../../ts/types/pricingPlan.ts';
import notify from '../../../utils/notify.ts';
import CardContainer from '../common/CardContainer';

import PricingPlanContent from './PricingPlanCardContent/index.tsx';

interface PricingPlanProps {
  plan: PricingPlan;
}

const PricingPlanCard: FC<PricingPlanProps> = ({ plan }) => {
  const { name } = plan;
  const { t } = useTranslation('store');

  return (
    <CardContainer
      title={name}
      buttonHandler={() => notify.success('Bought')}
      buttonTitle={
        <>
          {t('pricingPlanCard.actionButton')}
          <IoWalletOutline size={18} />
        </>
      }
    >
      <PricingPlanContent data={plan} />
    </CardContainer>
  );
};

export default PricingPlanCard;
