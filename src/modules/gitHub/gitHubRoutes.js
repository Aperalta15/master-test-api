const express = require('express');
const router = express.Router();
const gitHubController = require('./gitHubController');

router.get('/', gitHubController.getRepositories);

module.exports = router;
