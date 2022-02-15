const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

const userController = require('../controllers/userController');

router.use(cookieParser());

router.post('/signup', userController.signup, (req, res) => {
  return res.status(200).send(res.locals.result);
});

router.post('/login', userController.login, (req, res) => {
  return res.status(200).send(res.locals.result);
});

router.put('/update-filters', (req, res) => {
  return res.status(200);
});

router.patch('/update-password', (req, res) => {
  return res.status(200);
});

module.exports = router;
