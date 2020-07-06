const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const createError = require('http-errors');
const express = require('express');
//const handleError = require('./middleware/handleError');
const helmet = require('helmet');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const path = require('path');
const rateLimit = require('express-rate-limit');
const { RATE_LIMIT } = require('./config/config');
const session = require('express-session');
const { SESSION_EXP, ISDEV } = require('./config/config');
const SessionMemory = require('memorystore')(session);
const xss = require('xss-clean');

/** 
 * @desc  INITIALIZE APP
 */

const app = express();
connectDB();

/** 
 * @desc  SECURITY
 */
app.use(helmet());
app.use(xss());
app.use(hpp());
app.use(cors());
app.use(mongoSanitize());
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: RATE_LIMIT
});
app.use(limiter);

/** 
 * @desc EXPRESS MIDDLEWARE
 */

 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));
 //app.use(express.static(path.join(__dirname, 'public')));
 app.use(cookieParser());
 app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  store: new SessionMemory({
    checkPeriod: SESSION_PERIOD
  })
}));

/** 
 * @desc GLOBAL VARIABLES
 */

if (ISDEV) {
  const logger = require('morgan');
  app.use(logger('dev'))
}

/**
 * @desc LOAD ROUTES
 */
//app.use('/api/users', require('./routes/api.users'));
//app.use('/api/auth', require('./routes/api.auth'));

/**
 * @desc ERROR HANDLING
 */  

app.use(function (req, res, next) {
  next(createError(404, 'Resource is not found'));
});

//app.use(handleError);

module.exports = app;