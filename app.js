'use strict';
//lint names undefined warning killers
var document;
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
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ];

// Constructor will go here
function CookieStore (tableElement, name, minCust, maxCust, avgCookiesPerSale) {
  this.salesResults = [];
  this.grabBag = 0;
  this.tableElement = tableElement;
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.hoursOpen = hoursOpen;
  this.avgCookiesPerSale = avgCookiesPerSale;
}
// random customer number generator
CookieStore.prototype.ranCustNum = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
};

//random cookie sales generator 1st and pike is REALLY busy!
CookieStore.prototype.hourlyCookies = function () {
  for (var i = 0; i < hoursOpen.length; i++) {
    var totalHourlyCookies = Math.floor(this.avgCookiesPerSale * this.ranCustNum());
    this.salesResults.push(totalHourlyCookies);
    this.grabBag = totalHourlyCookies + this.grabBag;
  }
};
//lets create the stores' framework
CookieStore.prototype.render = function() {
  var cookieStoreCell;
  //create the table row
  var addRow = document.createElement('tr');
  this.tableElement = addRow;
  //create the table data
  var locationHeader = document.createElement('td');
  locationHeader.textContent = this.name;
  this.tableElement.appendChild(locationHeader);
  //create table cells for the 15 hours the stores are open for
  for (var i = 0; i < 15; i++) {
    cookieStoreCell = document.createElement('td');
    cookieStoreCell.textContent = this.salesResults[i];
    this.tableElement.appendChild(cookieStoreCell);
  }
  var newTable = document.getElementById('sales_report');
  newTable.appendChild(this.tableElement);
};
//create a new table
function tableAdd() {
  var newElement;
  for (var i = 0; i < 16; i++) {
    newElement = document.createElement('tr');
    newElement.textContent = this.salesResults[i];
    this.tableElement.appendChild(newElement);
  }
}

// tableAdd();

//create table header
function tableHeaderAdd() {
  var hoursOpenCell;
  var addRow = document.createElement('tr');
  var addHead = document.createElement('th');
  addRow.appendChild(addHead);
  for (var i = 0; i < 15; i++) {
    hoursOpenCell = document.createElement('th');
    hoursOpenCell.textContent = hoursOpen[i];
    addRow.appendChild(hoursOpenCell);
  }
  var newTable = document.getElementById('sales_report');
  newTable.appendChild(addRow);
}
//calls the tableHeaderAdd function
tableHeaderAdd();
//cookie stores and their data and random cookies calls
var firstAndPike = new CookieStore (firstAndPikeTR, '1st and Pike', 23, 65, 6.3);
firstAndPike.hourlyCookies();
firstAndPike.render();

var seaTac = new CookieStore (seaTacTR, 'Sea Tac Airport', 3, 24, 1.2);
seaTac.hourlyCookies();
seaTac.render();

var seattleCenter = new CookieStore (seattleCenterTR, 'Seattle Center', 11, 38, 3.7);
seattleCenter.hourlyCookies();
seattleCenter.render();

var capitolHill = new CookieStore (capitolHillTR, 'Capitol Hill', 20, 38, 2.3);
capitolHill.hourlyCookies();
capitolHill.render();

var alki = new CookieStore (alkiTR, 'Alki', 2, 16, 4.6);
alki.hourlyCookies();
alki.render();
