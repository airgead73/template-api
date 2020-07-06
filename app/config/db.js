const mongoose = require('mongoose');
const { DB, DB_DEV } = require('./config');

const URI = process.env.NODE_ENV === 'development' ? DB_DEV : DB;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log(`*** MongoDB connected: ${conn.connection.host} ***`);
  } catch(err) {
    console.error(err.message)
  }
};

module.exports = connectDB;