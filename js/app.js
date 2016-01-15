// Constructor
'use strict';
var hours = ["6:00 am: ", "7:00 am: ", "8:00 am: ", "9:00 am: ", "10:00 am: ", "11:00 am: ",
"12 noon: ", "1:00 pm: ", "2:00 pm: ", "3:00 pm: ", "4:00 pm: ", "5:00 pm: ", "6:00 pm: ",
"7:00 pm: ", "8:00 pm: "];

var allShops = [
  ['Pike Place', 14, 55, 1.2, 3.7],
  ['Capitol Hill',32,48,3.2,0.4],
  ['Seattle Public Library', 49, 75, 2.6, 0.2],
  ['South Lake Union', 35, 88, 1.3, 3.7,],
  ['Sea-Tac Airpot', 68, 124, 1.1, 2.7],
  ['Website Sales', 3, 6, 0, 6.7]]

var allShopsCollection = [];

//this function should print the hours
  var printHoursHeader = function () {
    var tableEL = document.getElementById('myTable');
    tableEL.id = 'tableid';   //create an ID for the table
    var trEl = document.createElement('tr');
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
  printHoursHeader();
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
  //methods
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

//This function has to be run to get the data and rendering to work
var allMustDie = function () {
  for (var i = 0; i < allShops.length; i++) {
    allShopsCollection.push(new LocationCoffee(allShops[i][0],allShops[i][1],allShops[i][2],allShops[i][3],allShops[i][4]));
    allShopsCollection[i].renderTable();  //apparently I could instead call this within the array

  }
}
  allMustDie();

//Lets make an Event Handler
function handleCommentSubmit(event) {
	console.log(event); // so you can see what the comment is
	event.preventDefault(); //stop the default behavior of the submit event
  //store the new inputs as new objects for ease of use
  var storeName2 = event.target.storename.value;
  var minCust2 = parseFloat(event.target.minCust.value);
  var maxCust2 = parseFloat(event.target.maxCust.value);
  var avgCup2 = parseFloat(event.target.averageCups.value);
  var avgPnds2 = parseFloat(event.target.averagePounds.value);

  //render the new store on the table
  if (!storeName2 || !minCust2 || !maxCust2 || !avgCup2 || !avgPnds2) {
    return alert('Please Fill in Every Field.');
    }
    else {
        var newStore = new LocationCoffee(storeName2,minCust2,maxCust2,avgCup2,avgPnds2);
        newStore.renderTable();
        event.target.storename.value = null;
        event.target.minCust.value = null;
        event.target.maxCust.value = null;
        event.target.averageCups.value = null;
        event.target.averagePounds.value = null;
        }
    }

//lets make an EVENT LISTNER
var el = document.getElementById('newStore');
el.addEventListener('submit', handleCommentSubmit);
