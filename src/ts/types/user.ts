export type UserRole = 'basic' | 'admin';

export type User = {
  id: number;
  username: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
};
