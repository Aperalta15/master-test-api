const express = require('express');
const bodyParser = require('body-parser');
const gitHubRoutes = require('./modules/gitHub/gitHubRoutes');

const app = express();

// Middlewares
app.use(bodyParser.json());

app.use('/api/github', gitHubRoutes);

module.exports = app;
