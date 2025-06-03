const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");

const DUMMY_BLOGS = [
    {
        id: '1',
        title: 'Hello world backend',
        content: 'Hello world long content',
        created_at: '2025-02-02',
        last_updated: '2025-03-03',
        username: 'alem117',
        user_id: '111',
        first_name: 'Abdulelah',
        last_name: 'Alem',
    },
    {
        id: '2',
        title: 'Hello world backend 22',
        content: 'Hello world long content 22',
        created_at: '2025-02-02',
        last_updated: '2025-03-03',
        username: 'alem117',
        user_id: '112',
        first_name: 'Abdulelah',
        last_name: 'Alem',
    },
    {
        id: '3',
        title: 'Hello world backend 44',
        content: 'Hello world long content 44',
        created_at: '2025-02-02',
        updated_at: '2025-03-03',
        username: 'alem117',
        user_id: '113',
        first_name: 'Abdulelah',
        last_name: 'Alem',
    }
];

const getBlogs = (req, res, next) => {
    res.json({data: DUMMY_BLOGS})
}

const getBlogById = (req, res, next) => {
    const blogId = req.params.blogId;
    const blog = DUMMY_BLOGS.find(blog => blog.id === blogId);

    if (!blog) {
        return next(new HttpError('No blog found', 404));
    }

    res.json({data: blog});
}

const getBlogsByUserId = (req, res, next) => {
    const userId = req.params.userId;
    const blogs = DUMMY_BLOGS.filter(blog => blog.user_id === userId);
    res.json({data: blogs});
}

const postBlog = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new HttpError('Invalid input, please check your data', 422));
    }

    const {title, content} = req.body;
    // Do something in DB
    res.status(201) // TODO: return the created blog here
}

const updateBlog = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new HttpError('Invalid input, please check your data', 422));
    }

    const {title, content} = req.body;
    const blogId = req.params.blogId;

    // Do DB logic

    res.status(200)
}

const deleteBlog = (req, res, next) => {
    const blogId = req.params.blogId;

    // Do DB logic

    res.status(200)
}

exports.getBlogs = getBlogs;
exports.getBlogById = getBlogById;
exports.getBlogsByUserId = getBlogsByUserId;
exports.postBlog = postBlog;
exports.updateBlog = updateBlog;
exports.deleteBlog = deleteBlog;
