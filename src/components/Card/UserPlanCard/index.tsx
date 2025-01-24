import { FC } from 'react';

import { UserPlan } from '../../../ts/types/userPlan';
import CardContainer from '../common/CardContainer';
import notify from '../../../utils/notify';
import UserPlanCardContent from './UserPlanCardContent';

interface UserPlanCardProps {
	plan: UserPlan
}

const UserPlanCard: FC<UserPlanCardProps> = ({plan}) => {
	const {name, config} = plan

	const buttonClickHandler = async () => {
		await navigator.clipboard.writeText(config);

		notify.success('Конфиг скопирован в буфер обмена')
	}

	return (
		<CardContainer title={name} buttonHandler={buttonClickHandler} buttonTitle='Скопировать' >
			<UserPlanCardContent data={plan}/>
		</CardContainer>
	)
}

export default UserPlanCard