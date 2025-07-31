const roleBasedAuth = (role) => {
  return (req, res, next) => {
    if (req.user.roles.includes(role)) return next();

    res.status(403).send("Access denied.");
  };
};

export default roleBasedAuth;
