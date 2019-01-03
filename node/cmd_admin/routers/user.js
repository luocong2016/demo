const express = require('express');
const router = express.Router();

const User = require('../controllers/user/User');

router.post('/login', User.login);
router.post('/append', User.append);
router.get('/logout', User.logout);

module.exports = router;
