export const error_handler = (err, req, res, next) => {
    res.status(err.status || 500).json({
        error: err.message,
        route: req.originalUrl,
        timestamps: new Date().toLocaleString()
    });

}