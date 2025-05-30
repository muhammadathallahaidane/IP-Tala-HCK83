const errorHandler = (err, req, res, next) => {
    console.log(err); // Log error untuk debugging

    let statusCode = 500;
    let message = 'Internal Server Error';

    if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
        statusCode = 400;
        message = err.errors.map(e => e.message).join(', ');
    } else if (err.name === 'BadRequest') {
        statusCode = 400;
        message = err.message || 'Bad Request';
    } else if (err.name === 'Unauthorized') {
        statusCode = 401;
        message = err.message || 'Authentication failed';
    } else if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
        statusCode = 401;
        message = 'Invalid or expired token';
    } else if (err.name === 'Forbidden') {
        statusCode = 403;
        message = err.message || 'You are not authorized to perform this action';
    } else if (err.name === 'NotFound') {
        statusCode = 404;
        message = err.message || 'Resource not found';
    } else if (err.name === 'AIError') {
        statusCode = 500;
        message = err.message || 'AI service error';
    } else if (err.statusCode && err.message) { // Hanya untuk error yang sudah memiliki statusCode
        statusCode = err.statusCode;
        message = err.message;
    }
    // Hapus kondisi else if (err.message) yang lama

    res.status(statusCode).json({ message });
};

module.exports = errorHandler;