const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controllers');
const loginRequired = require('../middlewares/loginRequired');

router.post('/login', authController.login);

router.post('/register', authController.register)

router.post('/resetPassword', loginRequired, authController.resetPassword);


module.exports = router;
