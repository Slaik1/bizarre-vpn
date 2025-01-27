import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { UserPlan } from '../../../ts/types/userPlan';
import notify from '../../../utils/notify';
import CardContainer from '../common/CardContainer';

import UserPlanCardContent from './UserPlanCardContent';

interface UserPlanCardProps {
  plan: UserPlan;
}

const UserPlanCard: FC<UserPlanCardProps> = ({ plan }) => {
  const { t } = useTranslation('home');
  const { name, config } = plan;

  const buttonClickHandler = async () => {
    await navigator.clipboard.writeText(config);

    notify.success(t('general.copy.info'));
  };

  return (
    <CardContainer
      title={name}
      buttonHandler={buttonClickHandler}
      buttonTitle={t('userPlanCard.actionButton')}
    >
      <UserPlanCardContent data={plan} />
    </CardContainer>
  );
};

export default UserPlanCard;
