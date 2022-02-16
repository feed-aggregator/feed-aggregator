const db = require('../models/userModel');
const bcrypt = require('bcrypt');

const userController = {};

userController.signup = (req, res, next) => {
  const { email, password } = req.body;
  // console.log('email:', email);
  // console.log('in signup controller');
  // console.log('req.body:', req.body);
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return next(err);
    else {
      // console.log('hash', hash);
      Object.assign(req.body, { password: hash });
    }
    const date = new Date().toLocaleString('en-US');
    const input = `INSERT INTO users (user_email, user_password, user_created_at) VALUES ('${email}', '${req.body.password}', '${date}')`;
    // console.log('req.body.password', req.body.password);
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
        // console.log('signed up');
        res.locals.result = true;
        return next();
      }
    });
  });
};

userController.login = (req, res, next) => {
  const { email, password } = req.body;
  console.log('in login controller');
  console.log('login req.body.password:', req.body.password);
  const input = `SELECT * FROM users WHERE user_email='${email}'`;
  // AND user_password='${password}'

  db.query(input, (err, user) => {
    console.log('user', user);
    if (err) {
      return next({
        log: `There was an issue logging in user in userController.login. ${err}`,
        status: 400,
        message: {
          err: 'Error occurred in userController.login.',
        },
      });
    } else {
      bcrypt.compare(password, user.rows[0].user_password, (err, result) => {
        console.log('user.rows[0].user_password', user.rows[0].user_password);
        // if (err) return next(console.log('bcrypt err', err));
        if (result) {
          console.log('password matches hashed pass');
          res.locals.result = true;
          return next();
        } else {
          console.log('password does not match');
        }
      });
    }
  });
};

userController.logout = (req, res, next) => {
  res.clearCookie('cookie');
  res.locals.result = true;
  return next();
};

userController.updateFilters = () => (req, res, next) => {
  const { hackernews, github, reddit } = req.body;

  const values = [hackernews, github, reddit];

  const input = `INSERT INTO filters (filter_hackernews, filter_github, filter_reddit) VALUES ($1, $2, $3)`;

  db.query(input, values, (err, result) => {
    if (err) {
      return next({
        log: `There was an issue updating filters in userController.updateFilters. ${err}`,
        status: 400,
        message: {
          err: 'Error occurred in userController.updateFilters.',
        },
      });
    } else {
      res.locals.result = true;
      return next();
    }
  });
};

module.exports = userController;
