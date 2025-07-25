const logger = (req, res, next) => {
  const method = req.method;
  const url = req.originalUrl;

  console.log(`Method: ${method} & Url: ${url}`);

  next();
};

export default logger;
