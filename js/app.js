// my js will be in here
var pikePlace {
  minCustPerHour: 14,
  maxCustPerHour: 33,
  avgCupPerCust: 1.2,
  avgPndPerCust: 3.7
};

var generateRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var randomCustPikePlace = this.generateRandom(minCustPerHour, maxCustPerHour);
var beanTotalPerHour = (randomCustPikePlace*avgCupPerCust)+(randomCustPikePlace*avgPndPerCust);
