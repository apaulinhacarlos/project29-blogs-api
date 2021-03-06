const express = require('express');
const userController = require('../controllers/user');
const middleware = require('../middleware');

const router = express.Router({ mergeParams: true });

router.post('/', userController.create);
router.get('/', middleware.auth, userController.findAll);
router.get('/:id', middleware.auth, userController.findById);

module.exports = router;