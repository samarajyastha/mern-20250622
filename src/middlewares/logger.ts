const logger = (req: Request, res: Response, next) => {
  const method = req.method;
  const url = req.originalUrl;

  console.log(`Method: ${method} & Url: ${url}`);

  next();
};

export default logger;
