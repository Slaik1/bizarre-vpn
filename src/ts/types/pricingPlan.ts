export type PricingPlan = {
  id: number;
  country: string;
  name: string;
  description: string;
  durationMonth: number;
  dataLimit: number;
  speedLimitGb: number;
  speedLimitMbps: number;
  deviceLimit: number;
  price: number;
};
