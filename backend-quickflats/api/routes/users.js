const express = require('express'); 
const router = express.Router();
const userControllers =  require('../controllers/userControllers')


router.post('/signup', userControllers.user_create_signup )

router.post('/login', userControllers.user_create_login)

router.delete('/:userId', userControllers.user_delete)

module.exports = router;