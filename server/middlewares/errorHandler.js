export const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';

  res.status(statusCode).json({
    message: errorMessage,
  });
};
