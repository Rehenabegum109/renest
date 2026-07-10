const globalErrorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        message: err.message || "Something went wrong",
        errorDetails: err.errors || err,
    });
};
export default globalErrorHandler;
//# sourceMappingURL=globalErrorHandler.js.map