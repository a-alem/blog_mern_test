const express = require('express');
const bodyParser = require('body-parser');

const blogsRoutes = require('./routes/blogs-routes');

const app = express();

app.use(bodyParser.json());

app.use('/api/places', blogsRoutes);

app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || "An unexpected error occurred."});
})

app.listen(5050);