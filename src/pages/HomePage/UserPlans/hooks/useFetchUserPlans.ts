import { useEffect, useState } from "react";

import tryCatchWrapper from "../../../../helpers/tryCatchWrapper";
import { UserPlan } from "../../../../ts/types/userPlan";
import notify from "../../../../utils/notify";

import { MOCK_USER_PLANS } from "./mock";

export const useFetchUserPlans = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [userPlans, setUserPlans] = useState<UserPlan[]>([]);

	const fetchPlans = 
		tryCatchWrapper(
			async () => {
				setUserPlans(MOCK_USER_PLANS)
		},
		{
			setIsLoading: setIsLoading,
			errorHandler: () => notify.error("Ошибка получения планов пользователя"),
		}
		)

	useEffect(() => {fetchPlans()}, [])

	return {userPlans, isLoading}
}