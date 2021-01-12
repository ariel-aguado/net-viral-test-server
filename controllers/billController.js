const catchAsync = require('../utils/catchAsync.jsc');
const AppError = require('../utils/appError.jsc');
const Bills = require('../models/billModel.jsc');

exports.getBills = catchAsync(async (req, res, next) => {

  if (!Bills.length) return next(new AppError('No Bills found.', 400));

  res.status(200).json({
    status: 'success',
    data: {
      Bills
    }
  });
});
