module.exports = {
  PORT: process.env.PORT,
  DB_DEV: process.env.MONGO_URI,
  DB: process.env.PR_MONGO_URI,
  JWT: process.env.JWT_SECRET,
  JWT_EXP: process.env.JWT_EXP,
  SESSION_PERIOD: 86400000,
  SESSION_SECRET: process.env.SESSION_SECRET,
  RATE_LIMIT: 100,
  SALT_ROUNDS: process.env.SALT_ROUNDS,
  ISDEV: isDev = process.env.NODE_ENV === 'development'
};