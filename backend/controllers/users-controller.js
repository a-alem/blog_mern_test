const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");

const login = (req, res, next) => {};

const signup = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new HttpError('Invalid input, please check your data', 422));
    }
};

const logout = (req, res, next) => {};

const getUsers = (req, res, next) => {};

const getUserProfile = (req, res, next) => {};

exports.login = login;
exports.signup = signup;
exports.logout = logout;
exports.getUsers = getUsers;
exports.getUserProfile = getUserProfile;