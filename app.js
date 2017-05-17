'use strict';
//lint names undefined warning killers
// var document;
// var alert;
// var console;
//random number generator
// function ranNumGen(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
//displays the random number in a pop-up
// alert ('the number is ' + ranNumGen(5, 99));

//
var firstAndPikeTR = document.getElementById ('firstAndPike');
var seaTacTR = document.getElementById ('seaTac');
var seattleCenterTR = document.getElementById ('seattleCenter');
var capitolHillTR = document.getElementById ('capitolHill');
var alkiTR = document.getElementById ('alki');

//hours table array
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ]

// Objects will go here
function CookieStore (tableElement,name, minCust, maxCust, avgCookiesPerSale) {
  this.tableElement = tableElement;
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.hoursOpen = hoursOpen;
  this.avgCookiesPerSale = avgCookiesPerSale;
}



var firstAndPike = new CookieStore (firstAndPikeTR, '1st and Pike', 23, 65, 6.3);
var seaTac = new CookieStore (seaTacTR, 'Sea Tac Airport', 3, 24, 1.2);
var seattleCenter = new CookieStore (seattleCenterTR, 'Seattle Center', 11, 38, 3.7);
var capitolHill = new CookieStore (capitolHillTR, 'Capitol Hill', 20, 38, 2.3);
var alki = new CookieStore (alkiTR, 'Alki', 2, 16, 4.6);
