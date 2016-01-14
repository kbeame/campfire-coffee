// Constructor
'use strict';
var hours = ["6:00 am: ", "7:00 am: ", "8:00 am: ", "9:00 am: ", "10:00 am: ", "11:00 am: ",
"12 noon: ", "1:00 pm: ", "2:00 pm: ", "3:00 pm: ", "4:00 pm: ", "5:00 pm: ", "6:00 pm: ",
"7:00 pm: ", "8:00 pm: "];
var coffeeName = ['Pike Place', 'Capitol Hill', 'Seattle Public Library','South Lake Union','SeaTac Airport','Website Sales'];

var allShops = [
  ['Pike Place', 14, 55, 1.2, 3.7],
  ['Capitol Hill',32,48,3.2,0.4],
  ['Seattle Public Library', 49, 75, 2.6, 0.2],
  ['South Lake Union', 35, 88, 1.3, 3.7,],
  ['Sea-Tac Airpot', 68, 124, 1.1, 2.7],
  ['Website Sales', 3, 6, 0, 6.7]]

  var allShopsCollection = [];
//this function should print the hours
  var printShops = function () {
    var tableEL = document.getElementById('myTable');
  //create an ID for the table
    tableEL.id = 'tableid';
    var trEl = document.createElement('tr')
    var tHeadEl = document.createElement('th');
    tHeadEl.textContent = 'Hours';
    trEl.appendChild(tHeadEl);
    for (var i = 0; i < hours.length; i++) {
      var thEl = document.createElement('th');
      thEl.textContent = hours[i];
      trEl.appendChild(thEl);
    }
    tableEL.appendChild(trEl);
  }
  printShops();
var LocationCoffee = function (locationName, minCust, maxCust, avgCup, avgPnd) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCup = avgCup;
  this.avgPnd = avgPnd;
  this.custHourly = [];
  this.cupHourly = [];
  this.pndHourly = [];
  this.beansTotalHourly = [];
  this.locationPndsTotal = 0;
  this.randomNum = function() {
    for (var i = 0; i < hours.length; i++) {
    this.custHourly.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  };
  this.hourly = function() {
    this.randomNum();
    for (var i = 0; i < hours.length; i++) {
      this.cupHourly.push(this.custHourly[i] * this.avgCup);
      this.pndHourly.push(this.custHourly[i] * this.avgPnd);
      }
    };
  this.totalPerHour = function () {
    this.hourly();
    for (var i = 0; i < hours.length; i++) {
      this.beansTotalHourly.push(Math.floor((0.05 * this.cupHourly[i]) + (this.pndHourly[i])));
      }
    };
  this.daily = function () {
    this.totalPerHour();
    for (var i = 0; i < this.beansTotalHourly.length; i++) {
      this.locationPndsTotal += this.beansTotalHourly[i];
      }
    };
  this.renderTable = function() {
    this.daily();
    var tableEL = document.getElementById('tableid');
    var trEl2 = document.createElement('tr');
    var tdEl2 = document.createElement('td')
    tdEl2.textContent = this.locationName;
    trEl2.appendChild(tdEl2);
    tableEL.appendChild(trEl2);
      for (var x = 0; x < this.beansTotalHourly.length; x++) {
        var tdEl3 = document.createElement('td');
        tdEl3.textContent = this.beansTotalHourly[x];
        trEl2.appendChild(tdEl3);
        }
      tableEL.appendChild(trEl2);
    }
}


var allMustDie = function () {
  for (var i = 0; i < allShops.length; i++) {
    allShopsCollection.push(new LocationCoffee(allShops[i][0],allShops[i][1],allShops[i][2],allShops[i][3],allShops[i][4]));
    allShopsCollection[i].renderTable();

  }
}
allMustDie();
