const { Router } = require('express');
const { check } = require('express-validator');

const blogsController = require('../controllers/blogs-controller');

const router = Router();

router.get('/', blogsController.getBlogs);

router.get('/:blogId', blogsController.getBlogById);

router.get('/user/:userId', blogsController.getBlogsByUserId);

router.post('/', [check('title').not().isEmpty(), check('content').not().isEmpty()], blogsController.postBlog)

router.patch('/:blogId', [check('title').not().isEmpty(), check('content').not().isEmpty()], blogsController.updateBlog)

router.delete('/:blogId', blogsController.deleteBlog)

module.exports = router;