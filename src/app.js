const express = require('express');
const Sentry = require('@sentry/node');

const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');
const config = require('./config');
const Logger = require('./middleware/Logger');
const ErrorResponse = require('./middleware/Error');

const db = mongoose.connection;

// Error tracker
if (config.MODE === 'production') {
  Sentry.init({ dsn: config.SENTRY });
  app.use(Sentry.Handlers.requestHandler());
}

/*
Global middleware
*/
app.use(Logger);
// Enable cors
const whitelist = config.ENABLE_URL.split('; ');
const corsOptions = {
  origin(origin, callback) {
    if (whitelist.includes(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.all('*', cors(corsOptions));

// Database connect
mongoose.connect(config.DB_URL, { useNewUrlParser: true });
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`database connected in ${config.MODE}`);
});

// Set route
app.use(express.static('statics'));
app.use('/api', routes);

app.use(ErrorResponse);

if (config.MODE === 'production') {
  app.use(Sentry.Handlers.errorHandler());
}


module.exports = app;
