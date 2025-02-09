import { UserRole } from "../ts/types/user";

export const FALLBACK_LANGUAGE = navigator.language.slice(0, 2) || 'en';
export const UserRoles: UserRole[] = ['basic', 'admin'];
