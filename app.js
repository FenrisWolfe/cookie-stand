'use strict';

// Objects will go here
var store = {
  strName: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookiePerSale: 6.3
};
var eleStore = document.elementById('storeName');
elestore.textContent = store.strName;
