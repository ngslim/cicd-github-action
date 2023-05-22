const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

router.use('/profile', userController.profile);
router.post('/update-user', userController.update);

module.exports = router;
