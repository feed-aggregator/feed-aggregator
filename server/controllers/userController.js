const db = require('../models/userModel');
const bcrypt = require('bcrypt');

const userController = {};

userController.signup = (req, res, next) => {
  const { email, password } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return next(err);
    else {
      Object.assign(req.body, { password: hash });
    }
  });

  const input = `INSERT INTO users (user_email, user_password) VALUES (${email}, ${req.body.password})`;

  db.query(input, (err, result) => {
    if (err) {
      return next({
        log: `There was an issue signing up user in userController.signup. ${err}`,
        status: 400,
        message: {
          err: 'Error occurred in userController.signup.',
        },
      });
    } else {
      res.locals.result = 'User successfully signed up.';
      return next();
    }
  });
};

userController.login = (req, res, next) => {
  const { email, password } = req.body;
  const input = `SELECT * FROM users WHERE user_email=${email} AND user_password=${password}`;

  db.query(input, (err, user) => {
    if (err) {
      return next({
        log: `There was an issue logging in user in userController.login. ${err}`,
        status: 400,
        message: {
          err: 'Error occurred in userController.login.',
        },
      });
    } else {
      bcrypt.compare(password, user.user_password, (err, result) => {
        if (err) return next(err);
        else if (result === true) {
          res.locals.result = 'User successfully logged in.';
          return next();
        }
      });
    }
  });
};

module.exports = userController;
