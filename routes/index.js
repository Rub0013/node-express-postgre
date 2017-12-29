const express = require('express');
const router = express();
const authController = require('../server/controllers');

router.post('/register', authController.register);

router.post('/login', authController.login);

module.exports = router;