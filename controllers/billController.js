const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Bills = require('../models/billModel');

exports.getBills = catchAsync(async (req, res, next) => {

  if (!Bills.length) return next(new AppError('No Bills found.', 400));

  res.status(200).json({
    status: 'success',
    data: {
      Bills
    }
  });
});
