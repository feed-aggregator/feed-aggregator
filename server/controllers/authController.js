const db = require('../models/userModel');

const authController = {};

authController.setCookie = (req, res, next) => {
  try {
    // let randomString = Math.random().toString();
    // randomString = randomString.substring(2, randomString.length);
    res.cookie('cookie', 'cookieValue', {
      maxAge: 90000,
      httpOnly: true,
    });
    return next();
  } catch (err) {
    return next({
      log: `There was an issue setting the cookie in authController.setCookie. ${err}`,
      status: 417,
      message: {
        err: 'Error occurred in authController.setCookie.',
      },
    });
  }
};

authController.verifyCookie = (req, res, next) => {
  try {
    const { cookie } = req.cookies;

    if (cookie === 'cookieValue') {
      return next();
    }
  } catch (err) {
    return next({
      log: `There was an issue verifying cookie in authController.verifyCookie. ${err}`,
      status: 401,
      message: {
        err: 'Error occurred in authController.verifyCookie.',
      },
    });
  }
};

module.exports = authController;
