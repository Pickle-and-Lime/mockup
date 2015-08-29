var synaptic = require('synaptic');

var Neuron = synaptic.Neuron,
  Layer = synaptic.Layer,
  Network = synaptic.Network,
  Trainer = synaptic.Trainer,
  Architect = synaptic.Architect;

module.exports = {
  
  //function to create a new item using correct trainingSet for household size
  newItem : function(name, trainingSet){
    //create the network; input = time since last purchase; output = probability out
    this.network = new Architect.LSTM(1, 6, 1);
    var trainer = new Trainer(this.network);

    //set the trainingSet property to access/update in the future
    this.trainingSet = trainingSet;

    //set the train property to retrain with updated trainingSet in the future
    this.train = function(){
      trainer.train(this.trainingSet);
    };

    //Update the network as needed
    this.update = function(data, result){
      this.trainingSet.push({input : [data/365], output :[result]});
      this.train(this.trainingSet);
    };

    //set the name of the network
    this.name = name;
  }, 
  //pantry and list will be columns in user database
  pantry : {},
  list : {},

  //to calculate the amount of time since last purchased
  dateDiff : function(date2){
    var diff = (new Date() - date2.getTime())/ (24 * 60 * 60 * 1000);
    return Math.round(diff);
  }
};
