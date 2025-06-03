const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const usersRoutes = require('./routes/user-routes')
const blogsRoutes = require('./routes/blogs-routes');
const HttpError = require('./models/http-error');

const app = express();

const MONGODB_CONNECTION_STRING = 'mongodb://root:example@mongodb:27017/?authSource=admin';

app.use(bodyParser.json());

app.use('/api/users', usersRoutes)

app.use('/api/places', blogsRoutes);

app.use((req,res,next) => {
    return next(new HttpError('Route Not Found', 404))
})

app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || "An unexpected error occurred."});
})

mongoose.connect(MONGODB_CONNECTION_STRING).then(() => {
    app.listen(5050);
}).catch(err => {
    console.log(err);
});

