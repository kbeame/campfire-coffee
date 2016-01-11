// my js will be in here
// var hourlyBeanTotal = function () {
//   console.log(pikePlace.beanTotalPerHour());
// }
//
// var generateRandom = function(min, max) {
//   console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// }
//
// var pikePlace = {
//   minCustPerHour: 14,
//   maxCustPerHour: 33,
//   avgCupPerCust: 1.2,
//   avgPndPerCust: 3.7,
//   randomCustNumbPerHour: function() {
//   console.log(generateRandom(pikePlace.minCustPerHour,pikePlace.maxCustPerHour));
//   },
//   beanTotalPerHour: function () {
//     console.log(Math.floor((pikePlace.randomCustNumbPerHour*pikePlace.avgCupPerCust) + (pikePlace.randomCustNumbPerHour*pikePlace.avgPndPerCust)));
// }
// }

//attempt # 2

var generateRandom = function(min, max) {
  return(Math.floor(Math.random() * (max - min + 1)) + min);
}
var pikeRandomNum = generateRandom(14, 33);

var pikePlace = {
  minCustPerHour: 14,
  maxCustPerHour: 33,
  avgCupPerCust: 1.2,
  avgPndPerCust: 3.7,

  cupPerHour: function() {
    return(pikeRandomNum * pikePlace.avgCupPerCust);
    },
  pndPerHour: function() {
    return(pikeRandomNum * pikePlace.avgPndPerCust);
    },
  beanTotalPerHour: function () {
    return(Math.floor((0.05 * pikePlace.cupPerHour()) + (pikePlace.pndPerHour())));
    }
}

// pikePlace.beanTotalPerHour();
document.write(pikePlace.beanTotalPerHour());
