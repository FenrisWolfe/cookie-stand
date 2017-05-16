'use strict';
//lint names undefined warning killers
var document;
// Objects will go here
var store = {
  strName: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookiePerSale: 6.3
};
var eleStore = document.getElementById('strName');
eleStore.textContent = store.strName;
var eleMin = document.getElementById('minCust');
eleMin.textContent = store.minCust;
var eleMax= document.getElementById('maxCust');
eleMax.textContent = store.maxCust;
var eleAvg = document.getElementById('avgCookiePerSale');
eleAvg.textContent = store.avgCookiePerSale;
