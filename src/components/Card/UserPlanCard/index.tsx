import { t } from 'i18next';
import { FC, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { IoCopyOutline } from 'react-icons/io5';

import { UserPlan } from '../../../ts/types/userPlan';
import notify from '../../../utils/notify';
import CardContainer from '../common/CardContainer';

import UserPlanCardContent from './UserPlanCardContent';

interface UserPlanCardProps {
  plan: UserPlan;
}

const UserPlanCard: FC<UserPlanCardProps> = ({ plan }) => {
  const { t: homeTranslation } = useTranslation('home');
  const { name, config } = plan;

  const buttonClickHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    await navigator.clipboard.writeText(config);

    notify.success(t('general.copy.info'));
  };

  return (
    <CardContainer
      title={name}
      buttonHandler={buttonClickHandler}
      buttonTitle={
        <>
          {homeTranslation('userPlanCard.actionButton')}
          <IoCopyOutline />
        </>
      }
    >
      <UserPlanCardContent data={plan} />
    </CardContainer>
  );
};

export default UserPlanCard;
