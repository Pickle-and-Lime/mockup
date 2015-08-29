var helpers = require('./helpers.js');
var milk = require('./milk/milkNetwork.js');
var rice = require('./rice/riceNetwork.js');

//called when user adds to pantry from gen list or by checking off
var buildPantry = function(item, month, day){
  //in implementation, no month, day--> just call and store new Date()
  helpers.pantry[item.name] = {
    item: item, 
    date: new Date(2015, month, day),
  }; //will be to database
};

//called when shopper opens app
var autoBuildList = function(){
  var dateBought, timeElapsed;
  helpers.list = {};
  for (var thing in helpers.pantry) {
    //get item
    item = helpers.pantry[thing].item;
    //get last bought date
    dateBought = helpers.pantry[thing].date;
    //calculate how long since last bought
    timeElapsed = helpers.dateDiff(dateBought);
    console.log('Time Elapsed',timeElapsed);
    console.log(thing, item.network.activate([timeElapsed/365]));
    if (item.network.activate([timeElapsed/365]) >0.5){
      //actually add item (not just item.name) to database
      helpers.list[item.name] = item;
    }

  }
  return helpers.list;
};

//called when manually adding items to list
var manAdd = function(item){
  //add the item to the shopping list
  helpers.list[item.name] = item;
  var dateBought = helpers.pantry[item.name].date;
  //calculate how long since last bought
  var timeElapsed = helpers.dateDiff(dateBought);
  //update the NN with the new data
  item.update(timeElapsed, 0.9);
};

//called when manually removing items added by Rosie (NOT bought)
var manRemove = function(item){
  //remove the item from the shopping list
  delete helpers.list[item.name];
  var dateBought = helpers.pantry[item.name].date;
  //calculate how long since last bought
  var timeElapsed = helpers.dateDiff(dateBought);
  //update network with new data
  item.update(timeElapsed, 0.1);
};

//called while shopping to mark off items
var check = function(item){
  helpers.list[item.name] = 'checked';
};

//called after purchase
var bought = function(){
  //loop through the list
  for (var item in helpers.list){
    //check if it was found
    if (helpers.list[item] === 'checked'){
      //update the date to today
      helpers.pantry[item].date = new Date();
      //delete the item from the shopping list
      delete helpers.list[item];
    }
  }
};

/////////////
// EXAMPLE //
/////////////

//example of adding to pantry with some fake dates (see comment above)
buildPantry(milk, 7, 25);
buildPantry(rice, 6, 20);

//build list for today
autoBuildList();
console.log(1,helpers.list);

//let's say you actually DO need milk
manAdd(milk);
console.log(2, helpers.list);

//try the autoBuild again, and milk should show up this time
autoBuildList();
console.log(3,helpers.list);

//turns out you don't actually want milk
manRemove(milk);
console.log(4,helpers.list);

//if you autoBuild again, no more milk!
autoBuildList();
console.log(5,helpers.list);

//Go shopping, checking off items as found
check(rice);
console.log('See, checked off',helpers.list);

//Purchase your items
bought();
console.log('Empty list',helpers.list);
console.log('Updated date in pantry',helpers.pantry);

//if you autoBuild again, nothing in there!
autoBuildList();
console.log('Empty list!',helpers.list);
