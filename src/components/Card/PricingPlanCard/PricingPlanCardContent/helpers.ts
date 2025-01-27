import { formatGigabytes } from '../../../../helpers/formatGigabytes/formatGigabytes';
import { PricingPlan } from '../../../../ts/types/pricingPlan';

export const getInfoDataArr = (data: PricingPlan, t: any) => {
  const { dataLimit, speedLimitGb, deviceLimit, country } = data;

  return [
    {
      title: t('pricingPlanCard.info.limit'),
      value: formatGigabytes(dataLimit),
    },
    {
      title: t('pricingPlanCard.speed.title'),
      value: t('pricingPlanCard.speed.value', { speed: speedLimitGb }),
    },
    {
      title: t('pricingPlanCard.device.title'),
      value: t('pricingPlanCard.device.value', { deviceLimit }),
    },
    {
      title: 'Страна',
      value: country,
    },
  ];
};
