const jwt = require('jsonwebtoken');
const { logger } = require('../logs/log4js');


module.exports = (req, res, next) => {
    logger.info('Validating for token');

    let authorizationHeader = req.get('Authorization');

    if (!authorizationHeader) {
        logger.error("authorizationHeader has not found");
        return res.send({
            success: false,
            message: "unAuthorised",
            statusCode: 401
        })
    }

    const token = authorizationHeader.split(' ')[1];
    let decodedToken;

    logger.info("decoding token using jwtSecretKey");

    try {
        decodedToken = jwt.verify(token, process.env.JWT_SECRETKEY);
    }
    catch (error) {
        logger.error("received token invalid");
        logger.error("user is unAuthorised");
        logger.error("error:", error);
        return res.send({
            success: false,
            message: "unAuthorised",
            statusCode: 401
        })
    }

    logger.info("token verified successfully");
    //console.log('req.url:', req.url);

    if (req.url === '/validateToken') {
        return res.send({
            success: true,
            message: "token verified successfully",
            statusCode: 200
        });
    } //for route validateToken 

    req.userId = decodedToken.userId;
    req.userEmail = decodedToken.email;
    next();
}