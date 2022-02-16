const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
require('dotenv').config();
const cors = require('cors');

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));

const usersRouter = require('./routes/users.js');

app.use('/api/users', usersRouter);

app.get('/', (req, res) => {
  return res.sendStatus(200);
});

//catch all route handler
app.use('*', (req, res) => {
  res.status(404).send('Page Not Found');
});

//global error handler
app.use(function (err, req, res, next) {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj['log']);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
