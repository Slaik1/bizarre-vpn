export interface UserPlan {
  duration: number;
  expiryDate: string;
  price: number;
  country: string;
  gbFrom: number;
  gbTo: number | null;
  name: string;
  id: number;
  config: string;
}
