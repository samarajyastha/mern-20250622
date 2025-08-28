const { ADMIN_ROLE, MERCHANT_ROLE } = require("@/constants/userRoles");

export function allowedAdminRoles(userRoles) {
  const adminRoles = [ADMIN_ROLE, MERCHANT_ROLE];

  return userRoles?.some((role) => adminRoles.includes(role));
}
