const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

router.use(cookieParser());

router.post('/signup', (req, res) => {
  return res.send(200);
});

router.post('/login', (req, res) => {
  return res.send(200);
});

router.put('/update-filters', (req, res) => {
  return res.send(200);
});

router.patch('/update-password', (req, res) => {
  return res.send(200);
});

module.exports = router;
