import { FC } from 'react';

import UserPlanCard from '../../../components/Card/UserPlanCard';

import { useFetchUserPlans } from './hooks/useFetchUserPlans';

import cl from './styles.module.scss'

const UserPlans: FC = () => {
	const { userPlans, isLoading } = useFetchUserPlans();

	return (
    <div className={cl.wrapper}>
      {userPlans.map((el) => (
        <UserPlanCard plan={el} key={el.id} />
      ))}
    </div>
	)
}

export default UserPlans