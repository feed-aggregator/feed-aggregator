const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.use(cookieParser());

router.post('/signup', userController.signup, (req, res) => {
  // console.log('after signup controller');
  return res.status(200).json({ result: res.locals.result });
});

router.post(
  '/login',
  userController.login,
  authController.setCookie,
  (req, res) => {
    console.log('after login controller and set cookie controller');
    return res.status(200).json({ result: res.locals.result });
  }
);

router.put('/update-filters', userController.updateFilters, (req, res) => {
  return res.status(200).json({ result: res.locals.result });
});

// router.patch('/update-password', (req, res) => {
//   return res.status(200);
// });

router.get('/logout', userController.logout, (req, res) => {
  return res.status(200).json({ result: res.locals.result });
});

module.exports = router;
