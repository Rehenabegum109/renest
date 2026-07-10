export const validateRequest = (schema) => (req, res, next) => {
    const result = schema.safeParse({
        body: req.body,
        params: req.params,
        query: req.query,
    });
    if (!result.success) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errorDetails: result.error.issues,
        });
    }
    next();
};
//# sourceMappingURL=validateRequest.js.map