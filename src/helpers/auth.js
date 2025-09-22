import { ADMIN_ROLE, MERCHANT_ROLE } from "@/constants/userRoles";

export function allowedAdminRoles(userRoles) {
  const adminRoles = [ADMIN_ROLE, MERCHANT_ROLE];

  return userRoles?.some((role) => adminRoles.includes(role));
}
