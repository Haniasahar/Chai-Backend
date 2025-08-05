const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      console.error("AsyncHandler caught error:", err); // For debugging
      next(err);
    });
  };
};

// export default asyncHandler;
export { asyncHandler };
