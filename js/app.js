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

  var printShops = function () {
    var sectEl = document.getElementById('myTable');
    var table = document.createElement('table');
    table.id = 'tableid';
    var trEl = document.createElement('tr')
    var tHeadEl = document.createElement('th');
    tHeadEl.textContent = 'Hours';
    trEl.appendChild(tHeadEl);
    for (var i = 0; i < hours.length; i++) {
      var thEl = document.createElement('th');
      thEl.textContent = hours[i];
      trEl.appendChild(thEl);
    }
    table.appendChild(trEl);
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
  this.render = function() {
    this.daily();
    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(this.locationName));
    document.body.appendChild(ulEl);
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      //6:00am: 86.5 lbs [23 customers, 27.6 cups (1.4 lbs), 85.1 lbs to-go]
      liEl.textContent = hours[i] + this.beansTotalHourly[i] + ' [' + this.custHourly[i] + ' customers, ' + this.cupHourly[i].toFixed(1) + ' cups (' + (this.cupHourly[i] / 20).toFixed(1) + '), ' + this.pndHourly[i].toFixed(1) + ' lbs to-go]';
      ulEl.appendChild(liEl);
      }
    },

  this.renderTable = function() {
    this.daily();
    // var sectEl = document.getElementById('myTable');
    // var table = document.createElement('table');
    // var trEl = document.createElement('tr')
    // var tHeadEl = document.createElement('th');
    // tHeadEl.textContent = 'Hours';
    // trEl.appendChild(tHeadEl);
    // for (var i = 0; i < hours.length; i++) {
    //   var thEl = document.createElement('th');
    //   thEl.textContent = hours[i];
    //   trEl.appendChild(thEl);
    // }
    // table.appendChild(trEl);
  var table = document.getElementById('tableid');
  var tBody = document.createElement('tbody');
  table.appendChild(tBody);
  var trEl2 = document.createElement('tr');
  trEl2.textContent = this.locationName;
  tBody.appendChild(trEl2);
    for (var x = 0; x < this.beansTotalHourly.length; x++) {
      var tdEl2 = document.createElement('td');
      tdEl2.textContent = this.beansTotalHourly[x];
      trEl2.appendChild(tdEl2);
      }
  // }
      sectEl.appendChild(table);
}
}


var allMustDie = function () {
  for (var i = 0; i < allShops.length; i++) {
    allShopsCollection.push(new LocationCoffee(allShops[i][0],allShops[i][1],allShops[i][2],allShops[i][3],allShops[i][4]));
    allShopsCollection[i].renderTable();
    allShopsCollection[i].render();
  }
}
allMustDie();
// var pikePlace = new LocationCoffee('Pike Place', 14, 55, 1.2, 3.7);
// pikePlace.renderTable();
// //
// var capHill = new LocationCoffee('Capitol Hill', 32, 48, 3.2, 0.4);
// capHill.renderTable();
//
// var seaPubLib = new LocationCoffee('Seattle Public Library', 49, 75, 2.6, 0.2);
// // seaPubLib.renderTable();
//
// var sLakeUnion = new LocationCoffee('South Lake Union', 35, 88, 1.3, 3.7);
// // sLakeUnion.renderTable();
//
// var sTacAir = new LocationCoffee('Sea-Tac Airpot', 68, 124, 1.1, 2.7);
// // sTacAir.renderTable();
//
// var websiteSales = new LocationCoffee('Website Sales', 3, 6, 0, 6.7);
// // websiteSales.renderTable();
