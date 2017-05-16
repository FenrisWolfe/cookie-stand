'use strict';
//lint names undefined warning killers
var document;
// Objects will go here
var storeZero = {
  strNameZero: '1st and Pike',
  minCustZero: 23,
  maxCustZero: 65,
  avgCookiePerSaleZero: 6.3
};

var storeOne = {
  strNameOne: 'SeaTac Airport',
  minCustOne: 3,
  maxCustOne: 24,
  avgCookiePerSaleOne: 1.2
};

var storeTwo = {
  strNameTwo: 'Seattle Center',
  minCustTwo: 11,
  maxCustTwo: 38,
  avgCookiePerSaleTwo: 3.7
};

var storeThree = {
  strNameThree: 'Capitol Hill',
  minCustThree: 20,
  maxCustThree: 38,
  avgCookiePerSaleThree: 2.3
};

var storeFour = {
  strNameFour: 'Alki',
  minCustFour: 2,
  maxCustFour: 16,
  avgCookiePerSaleFour: 4.6
};
//first store
var eleStoreZero = document.getElementById('strNameZero');
eleStoreZero.textContent = storeZero.strNameZero;
var eleMinZero = document.getElementById('minCustZero');
eleMinZero.textContent = storeZero.minCustZero;
var eleMaxZero= document.getElementById('maxCustZero');
eleMaxZero.textContent = storeZero.maxCustZero;
var eleAvgZero = document.getElementById('avgCookiePerSaleZero');
eleAvgZero.textContent = storeZero.avgCookiePerSaleZero;
//second store
var eleStoreOne = document.getElementById('strNameOne');
eleStoreOne.textContent = storeOne.strNameOne;
var eleMinOne = document.getElementById('minCustOne');
eleMinOne.textContent = storeOne.minCustOne;
var eleMaxOne= document.getElementById('maxCustOne');
eleMaxOne.textContent = storeOne.maxCustOne;
var eleAvgOne = document.getElementById('avgCookiePerSaleOne');
eleAvgOne.textContent = storeOne.avgCookiePerSaleOne;
//third store
var eleStoreTwo = document.getElementById('strNameTwo');
eleStoreTwo.textContent = storeTwo.strNameTwo;
var eleMinTwo = document.getElementById('minCustTwo');
eleMinTwo.textContent = storeTwo.minCustTwo;
var eleMaxTwo = document.getElementById('maxCustTwo');
eleMaxTwo.textContent = storeTwo.maxCustTwo;
var eleAvgTwo = document.getElementById('avgCookiePerSaleTwo');
eleAvgTwo.textContent = storeTwo.avgCookiePerSaleTwo;
//fourth store
var eleStoreThree = document.getElementById('strNameThree');
eleStoreThree.textContent = storeThree.strNameThree;
var eleMinThree = document.getElementById('minCustThree');
eleMinThree.textContent = storeThree.minCustThree;
var eleMaxThree= document.getElementById('maxCustThree');
eleMaxThree.textContent = storeThree.maxCustThree;
var eleAvgThree = document.getElementById('avgCookiePerSaleThree');
eleAvgThree.textContent = storeThree.avgCookiePerSaleThree;
//fifth store
var eleStoreFour = document.getElementById('strNameFour');
eleStoreFour.textContent = storeFour.strNameFour;
var eleMinFour = document.getElementById('minCustFour');
eleMinFour.textContent = storeFour.minCustFour;
var eleMaxFour= document.getElementById('maxCustFour');
eleMaxFour.textContent = storeFour.maxCustFour;
var eleAvgFour = document.getElementById('avgCookiePerSaleFour');
eleAvgFour.textContent = storeFour.avgCookiePerSaleFour;
