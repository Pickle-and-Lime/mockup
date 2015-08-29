var helpers = require('./../helpers.js');
var trainingSet = require('./riceData.js');
var rice = new helpers.newItem('rice', trainingSet);

rice.train(trainingSet);

module.exports = rice;
