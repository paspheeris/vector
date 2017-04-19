//var ANCESTRY_FILE = require('ancestry.js');
var file = require('./ANCESTRY_FILE.js')
var ancestry = JSON.parse(file);
//console.log(ancestry.length);

function average(array) {
  function plus(a, b) {return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var myAr = [];
ancestry.forEach(function(person) {
  if(person.mother in byName) {
    myAr.push(byName[person.mother].born - person.born);
    console.log(myAr);
  }
});
console.log(average(myAr));
