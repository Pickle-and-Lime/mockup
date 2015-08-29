var helpers = require('./../helpers.js');
var trainingSet = require('./milkData.js');
var milk = new helpers.newItem('milk', trainingSet);
milk.train(trainingSet);

module.exports = milk;
