const express = require('express');
const router = express.Router();
require('dotenv').config();

const authController = require('../controllers/authController');
const historyController = require('../controllers/historyController');

router.get(
  '/retrieveDefinitions',
  authController.verifyJWT,
  historyController.getAllDefinitions,
  (req, res, next) => {
    return res.status(200).json(res.locals.definitions);
  }
);

router.get(
  '/retrieveTranslations',
  authController.verifyJWT,
  historyController.getAllTranslations,
  (req, res, next) => {
    return res.status(200).json(res.locals.translations);
  }
);

router.post(
  '/saveTranslation',
  authController.verifyJWT,
  historyController.saveTranslation,
  (req, res, next) => {
    return res.status(200).json('translation saved!');
  }
);
// no api

// saving word

// we verify token before we create route for saving history

// when we generated token, we use our database user id. The decoded token is the user id.

// saving conversation

module.exports = router;
