const { logger } = require('../logs/log4js');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

exports.register = (req, res, next) => {
    logger.info('register method');

    let userEmail = req.body.email;
    let password = req.body.password;

    logger.info(`userEmail: ${userEmail}`);

    User.findOne({ email: userEmail })
        .then((user) => {
            if (user) {
                logger.error('user already existed');
                return res.send({
                    success: false,
                    message: "user already existed",
                    statusCode: 400
                })
            }
            else {
                logger.info('user is about to create');
                bcryptjs.hash(password, 12)
                    .then((hashedPassword) => {
                        logger.info('Password has been encrypted');
                        let newUser = new User({
                            email: userEmail,
                            password: hashedPassword
                        });
                        return newUser.save();
                    })
                    .then(user => {
                        logger.info('user has been registered successfully.')
                        return res.send({
                            success: true,
                            message: 'user has been registered successfully.',
                            statusCode: 200
                        })
                    })
                    .catch((error) => {
                        logger.error('error occured in bcryptjs.hash');
                        logger.error('error:', error);
                        return res.send({
                            success: false,
                            message: 'user registration failed',
                            statusCode: 500
                        })
                    })
            }
        })
        .catch((error) => {
            logger.error('error occured in User.findOne');
            logger.error('érror:', error);
            return res.send({
                success: false,
                message: 'user registration failed',
                statusCode: 500
            });
        })
}

exports.login = (req, res, next) => {

    logger.info('login method');

    let userEmail = req.body.email;
    let password = req.body.password;

    logger.info(`userEmail: ${userEmail}`);

    User.findOne({ email: userEmail })
        .then((user) => {
            if (!user) {
                logger.error('user not registered');
                return res.send({
                    success: false,
                    message: 'user not registered',
                    statusCode: 400
                })
            }
            else {
                bcryptjs.compare(password, user.password)
                    .then(flag => {
                        if (flag) {
                            logger.info('user loggedIn successfully.');

                            const token = jwt.sign({ userId: user._id, email: userEmail }, process.env.JWT_SECRETKEY, { expiresIn: '1h' });
                            return res.send({
                                success: true,
                                message: 'user loggedIn successfully.',
                                token,
                                statusCode: 200
                            });

                        }
                        else {
                            logger.error('user password incorrect.');
                            return res.send({
                                success: false,
                                message: 'user password incorrect.',
                                statusCode: 400
                            })
                        }
                    })
                    .catch((error) => {
                        logger.error('error in bcryptjs.compare')
                        logger.error("error:", error);
                        return res.send({
                            success: false,
                            message: 'user login failed.',
                            statusCode: 500
                        })
                    })
            }
        })
        .catch((error) => {
            logger.error('error in User.findOne')
            logger.error("error:", error);
            return res.send({
                success: false,
                message: 'user login failed.',
                statusCode: 500
            })
        })
}

exports.resetPassword = (req, res, next) => {

    let userEmail = req.userEmail;
    let oldPassword = req.body.oldPassword;
    let newPassword = req.body.newPassword;

    logger.info('resetPassword method');
    logger.info(`userEmail ${userEmail}`);

    User.findOne({ email: userEmail })
        .then(user => {
            if (!user) {
                logger.error('user not existed');
                return res.send({
                    success: false,
                    message: "user not existed",
                    statusCode: 400
                })
            }
            else {
                logger.info('user existed');
                bcryptjs.compare(oldPassword, user.password)
                    .then((flag) => {
                        if (!flag) {
                            logger.error('old password is incorrect');
                            return res.send({
                                success: false,
                                message: "oldPassword is incorrect",
                                statusCode: 400
                            })
                        }
                        else {
                            logger.info('oldPassword matched');
                            bcryptjs.hash(newPassword, 12)
                                .then(newHashedPassword => {
                                    User.update({ email: userEmail }, { password: newHashedPassword })
                                        .then(() => {
                                            logger.info('password reset successfully');
                                            res.send({
                                                success: true,
                                                message: "password reset successfully",
                                                statusCode: 200
                                            })
                                        })
                                        .catch((error) => {
                                            logger.error('error in User.update')
                                            logger.error("error:", error);
                                            return res.send({
                                                success: false,
                                                message: 'user resetPassword failed.',
                                                statusCode: 500
                                            })
                                        })
                                })
                                .catch((error) => {
                                    logger.error('error in bcryptjs.hash')
                                    logger.error("error:", error);
                                    return res.send({
                                        success: false,
                                        message: 'user resetPassword failed.',
                                        statusCode: 500
                                    })
                                })
                        }
                    })
                    .catch((error) => {
                        logger.error('error in bcryptjs.compare')
                        logger.error("error:", error);
                        return res.send({
                            success: false,
                            message: 'user resetPassword failed.',
                            statusCode: 500
                        })
                    })
            }
        })
        .catch((error) => {
            logger.error('error in User.findOne')
            logger.error("error:", error);
            return res.send({
                success: false,
                message: 'user resetPassword failed.',
                statusCode: 500
            })
        })
}

