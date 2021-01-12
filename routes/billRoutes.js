const express = require('express');
const billController = require('./../controllers/billController');

const router = express.Router();

router
  .route('/')
  .get(billController.getBills);

module.exports = router;
