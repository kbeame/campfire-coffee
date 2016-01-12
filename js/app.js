// var generateRandom = function(min, max) {
//   return(Math.floor(Math.random() * (max - min + 1)) + min);
// }
// var pikeRandomNum: generateRandom(14, 33);

var pikePlace = {
  minCustPerHour: 14,
  maxCustPerHour: 33,
  avgCupPerCust: 1.2,
  avgPndPerCust: 3.7,
  pikeRandomNum: function() {
    return(Math.floor(Math.random() * (33 - 14 + 1)) + 14);
    },
  cupPerHour: function() {
    return(pikePlace.pikeRandomNum() * pikePlace.avgCupPerCust);
    },
  pndPerHour: function() {
    return(pikePlace.pikeRandomNum() * pikePlace.avgPndPerCust);
    },
  beanTotalPerHour: function () {
    return(Math.floor((0.05 * pikePlace.cupPerHour()) + (pikePlace.pndPerHour())));
    }
}

var hours = ["6:00 am: ", "7:00 am: ", "8:00 am: ", "9:00 am: ", "10:00 am: ", "11:00 am: ",
"12 noon: ", "1:00 pm: ", "2:00 pm: ", "3:00 pm: ", "4:00 pm: ", "5:00 pm: ", "6:00 pm: ",
"7:00 pm: ", "8:00 pm: "];



var show = function() {
  for (var i = 0; i < hours.length; i++) {
    if (i < hours.length) {
      var listEl = document.createElement('ul');
      listEl.textContent = (hours[i] + pikePlace.pikeRandomNum() + " customers, " + pikePlace.cupPerHour() + " cups, " + pikePlace.pndPerHour() + " pnds to-go");
      document.body.appendChild(listEl);
      }
    else {
      console.log("done");
      }
    }
  }

show();
