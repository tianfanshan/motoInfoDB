const express = require('express')
const router = express.Router()
const UserController = require('../controller/UserController')
const { authentication ,isAdmin } = require('../middleware/authentication')

router.post('/',UserController.create);
router.post('/login',UserController.login);
router.delete('/logout',authentication,UserController.logout);
router.get('/confirm/:emailToken',UserController.confirm);

module.exports = router