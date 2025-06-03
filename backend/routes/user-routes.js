const { Router } = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/users-controller');

const router = Router();

router.post('/login', usersController.login);

router.post('/signup', [
        check('email').normalizeEmail().isEmail(),
        check('password').isLength({ min: 8 }),
        check('first_name').not().isEmpty(),
        check('last_name').not().isEmpty(),
    ],
    usersController.signup);

router.post('/logout', usersController.logout);

router.get('/', usersController.getUsers)

router.get('/:userId', usersController.getUserProfile)


module.exports = router;