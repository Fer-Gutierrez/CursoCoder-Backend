const applyPolicy = (roles) => {
  return (req, res, next) => {
    if (roles[0].toUpperCase() === "PUBLIC") return next();

    if (!req.user)
      return res.status(401).send({ status: "error", error: "No autenticado" });

    if (!roles.include(req.user.role.toUpperCase()))
      return res.status(403).send({ status: "error", error: "No autorizado" });

    next();
  };
};

export default applyPolicy;
