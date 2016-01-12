// my js will be in here
// var hourlyBeanTotal = function () {
//   console.log(pikePlace.beanTotalPerHour());


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
// document.write(pikePlace.beanTotalPerHour());

var hours = ["6:00 am: ", "7:00 am: ", "8:00 am: ", "9:00 am: ", "10:00 am: ", "11:00 am: ",
"12 noon: ", "1:00 pm: ", "2:00 pm: ", "3:00 pm: ", "4:00 pm: ", "5:00 pm: ", "6:00 pm: ",
"7:00 pm: ", "8:00 pm: "];

var Show = function() {
  if () {
  for (var i = 0; i < hours.length; i++) {
    return((hours[i]) + pikeRandomNum + " customers");
    }
  }
}

var listEl = document.createElement('ul');  //creating a varibale that is an html element
listEl.textContent = Show();  //give that varaible some content
document.body.appendChild(listEl);;      //take that content and put it in the document
