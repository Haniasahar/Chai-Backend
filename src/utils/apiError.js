class ApiError extends Error {
  constructor(
    message = "something wrong",
    statusCode,
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      this.stack = new Error().stack;
    }
  }
}

export { ApiError };