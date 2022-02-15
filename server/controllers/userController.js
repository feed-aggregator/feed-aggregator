const db = require('../models/userModel');

const userController = {};

userController.signup = (req, res, next) => {
  const { email, password } = req.body;

  const input = `INSERT INTO users (user_email, user_password) VALUES (${email}, ${password})`;

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

  db.query(input, (err, result) => {
    if (err) {
      return next({
        log: `There was an issue logging in user in userController.login. ${err}`,
        status: 400,
        message: {
          err: 'Error occurred in userController.login.',
        },
      });
    } else {
      res.locals.result = 'User successfully logged in.';
      return next();
    }
  });
};

module.exports = userController;
