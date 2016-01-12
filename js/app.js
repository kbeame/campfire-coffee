// Constructor
'use strict';
var hours = ["6:00 am: ", "7:00 am: ", "8:00 am: ", "9:00 am: ", "10:00 am: ", "11:00 am: ",
"12 noon: ", "1:00 pm: ", "2:00 pm: ", "3:00 pm: ", "4:00 pm: ", "5:00 pm: ", "6:00 pm: ",
"7:00 pm: ", "8:00 pm: "];

var Location = function (name, minCust, maxCust, avgCup, avgPnd) {
  this.name = name;
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
    pikePlace.daily();
    var ulEl = document.createElement('ul');
    ulEl.appendChild(document.createTextNode(this.name));
    document.body.appendChild(ulEl);
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      //6:00am: 86.5 lbs [23 customers, 27.6 cups (1.4 lbs), 85.1 lbs to-go]
      liEl.textContent = hours[i] + this.beansTotalHourly[i].toFixed(1) + ' [' + this.custHourly[i] + ' customers, ' + this.cupHourly[i].toFixed(1) + ' cups (' + (this.cupHourly[i] / 20).toFixed(1) + '), ' + this.pndHourly[i].toFixed(1) + ' lbs to-go]';
      ulEl.appendChild(liEl);
    }
  }
}

var pikePlace = new Location('Pike Place', 14, 55, 1.2, 3.7);
pikePlace.render();






// //Capitol Hill
//
// var capHill = {
//   minCustPerHour: 32,
//   maxCustPerHour: 48,
//   avgCupPerCust: 3.2,
//   avgPndPerCust: 0.4,
//   RandomNum: function() {
//     return(Math.floor(Math.random() * (48 - 32 + 1)) + 32);
//     },
//   cupPerHour: function() {
//     return(capHill.RandomNum() * capHill.avgCupPerCust);
//     },
//   pndPerHour: function() {
//     return(capHill.RandomNum() * capHill.avgPndPerCust);
//     },
//   beanTotalPerHour: function () {
//     return(Math.floor((0.05 * capHill.cupPerHour()) + (capHill.pndPerHour())));
//     }
// }
//
// // var h1El1 = document.createElement('h1');
// // h1El1.textContent = "Capitol Hill Data:"
// // document.body.appendChild(h1EL1);
//
// var show = function() {
//   for (var i = 0; i < hours.length; i++) {
//     if (i < hours.length) {
//       var listEl = document.createElement('ul');
//       listEl.textContent = ('Capitol Hill ' + hours[i] + capHill.RandomNum() + " customers, " + capHill.cupPerHour() + " cups, " + capHill.pndPerHour() + " pnds to-go");
//       document.body.appendChild(listEl);
//       }
//     else {
//       console.log("done");
//       }
//     }
//   }
//
// show();
//
// //Seattle Public Library
// var seaPubLib = {
//   minCustPerHour: 49,
//   maxCustPerHour: 75,
//   avgCupPerCust: 2.6,
//   avgPndPerCust: 0.2,
//   RandomNum: function() {
//     return(Math.floor(Math.random() * (75 - 49 + 1)) + 49);
//     },
//   cupPerHour: function() {
//     return(seaPubLib.RandomNum() * seaPubLib.avgCupPerCust);
//     },
//   pndPerHour: function() {
//     return(seaPubLib.RandomNum() * seaPubLib.avgPndPerCust);
//     },
//   beanTotalPerHour: function () {
//     return(Math.floor((0.05 * seaPubLib.cupPerHour()) + (seaPubLib.pndPerHour())));
//     }
// }
//
// var show = function() {
//   for (var i = 0; i < hours.length; i++) {
//     if (i < hours.length) {
//       var listEl = document.createElement('ul');
//       listEl.textContent = ('Seattle Public Library ' + hours[i] + seaPubLib.RandomNum() + " customers, " + seaPubLib.cupPerHour() + " cups, " + seaPubLib.pndPerHour() + " pnds to-go");
//       document.body.appendChild(listEl);
//       }
//     else {
//       console.log("done");
//       }
//     }
//   }
//
// show();
//
// //South Lake Union
// var sLakeUnion = {
//   minCustPerHour: 35,
//   maxCustPerHour: 88,
//   avgCupPerCust: 1.3,
//   avgPndPerCust: 3.7,
//   RandomNum: function() {
//     return(Math.floor(Math.random() * (88 - 35 + 1)) + 35);
//     },
//   cupPerHour: function() {
//     return(sLakeUnion.RandomNum() * sLakeUnion.avgCupPerCust);
//     },
//   pndPerHour: function() {
//     return(sLakeUnion.RandomNum() * sLakeUnion.avgPndPerCust);
//     },
//   beanTotalPerHour: function () {
//     return(Math.floor((0.05 * sLakeUnion.cupPerHour()) + (sLakeUnion.pndPerHour())));
//     }
// }
//
// var show = function() {
//   for (var i = 0; i < hours.length; i++) {
//     if (i < hours.length) {
//       var listEl = document.createElement('ul');
//       listEl.textContent = ('South Lake Union ' + hours[i] + sLakeUnion.RandomNum() + " customers, " + sLakeUnion.cupPerHour() + " cups, " + sLakeUnion.pndPerHour() + " pnds to-go");
//       document.body.appendChild(listEl);
//       }
//     else {
//       console.log("done");
//       }
//     }
//   }
//
// show();
//
// //Sea-Tac Airpot
// var sTacAir = {
//   minCustPerHour: 68,
//   maxCustPerHour: 124,
//   avgCupPerCust: 1.1,
//   avgPndPerCust: 2.7,
//   RandomNum: function() {
//     return(Math.floor(Math.random() * (124 - 68 + 1)) + 68);
//     },
//   cupPerHour: function() {
//     return(sTacAir.RandomNum() * sTacAir.avgCupPerCust);
//     },
//   pndPerHour: function() {
//     return(sTacAir.RandomNum() * sTacAir.avgPndPerCust);
//     },
//   beanTotalPerHour: function () {
//     return(Math.floor((0.05 * sTacAir.cupPerHour()) + (sTacAir.pndPerHour())));
//     }
// }
//
// var show = function() {
//   for (var i = 0; i < hours.length; i++) {
//     if (i < hours.length) {
//       var listEl = document.createElement('ul');
//       listEl.textContent = ('Sea-Tac Airpot ' + hours[i] + sTacAir.RandomNum() + " customers, " + sTacAir.cupPerHour() + " cups, " + sTacAir.pndPerHour() + " pnds to-go");
//       document.body.appendChild(listEl);
//       }
//     else {
//       console.log("done");
//       }
//     }
//   }
//
// show();
//
// //Website Sales
// var websiteSales = {
//   minCustPerHour: 3,
//   maxCustPerHour: 6,
//   avgCupPerCust: 0,
//   avgPndPerCust: 6.7,
//   RandomNum: function() {
//     return(Math.floor(Math.random() * (6 - 3 + 1)) + 3);
//     },
//   cupPerHour: function() {
//     return(websiteSales.RandomNum() * websiteSales.avgCupPerCust);
//     },
//   pndPerHour: function() {
//     return(websiteSales.RandomNum() * websiteSales.avgPndPerCust);
//     },
//   beanTotalPerHour: function () {
//     return(Math.floor((0.05 * websiteSales.cupPerHour()) + (websiteSales.pndPerHour())));
//     }
// }
//
// var show = function() {
//   for (var i = 0; i < hours.length; i++) {
//     if (i < hours.length) {
//       var listEl = document.createElement('ul');
//       listEl.textContent = ('Website Sales ' + hours[i] + websiteSales.RandomNum() + " customers, " + websiteSales.cupPerHour() + " cups, " + websiteSales.pndPerHour() + " pnds to-go");
//       document.body.appendChild(listEl);
//       }
//     else {
//       console.log("done");
//       }
//     }
//   }
//
// show();
