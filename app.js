const express = require("express");
const morgan = require('morgan');

const AppError = require('./utils/appError.jsc');
const globalErrorHandler = require('./controllers/errorController.jsc');
const billRoutes = require('./routes/billRoutes.jsc');

const app = express();

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/bills', billRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
