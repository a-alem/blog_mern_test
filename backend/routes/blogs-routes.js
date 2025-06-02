const express = require('express');

const blogsController = require('../controllers/blogs-controller');

const router = express.Router();

router.get('/', blogsController.getBlogs);

router.get('/:blogId', blogsController.getBlogById);

router.get('/user/:userId', blogsController.getBlogsByUserId);

router.post('/', blogsController.postBlog)

module.exports = router;