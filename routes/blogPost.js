const express = require('express');
const blogPostController = require('../controllers/blogPost');
const middleware = require('../middleware');

const router = express.Router({ mergeParams: true });

router.post('/', middleware.auth, blogPostController.create);
router.get('/', middleware.auth, blogPostController.findAll);
router.get('/:id', middleware.auth, blogPostController.findById);
// router.put('/:id', middleware.auth, middleware.authAdmin, blogPostController.update);
router.put('/:id', middleware.auth, blogPostController.update);

module.exports = router;