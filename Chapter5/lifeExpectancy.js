var file = require('./ANCESTRY_FILE.js');
var ancestry = JSON.parse(file);

function average(array) {
  function plus(a, b) {return a + b;}
  return array.reduce(plus) / array.length;
}

var ageAtDeath = ancestry.map(function(person) {
  return person.died - person.born;
});

var over90 = ancestry.filter(function(person) {
  return (person.died - person.born) > 90;
});

var myObj = {};
ancestry.forEach(function(person) {
  var century = Math.ceil(person.died / 100);
  if(!myObj[century]) {
    myObj[century] = [];
  }
  myObj[century].push(person.died - person.born);
});
for (var prop in myObj) {
  myObj[prop] = average(myObj[prop]);
}
//console.log(myObj);

function every(array, testFun) {
  for (var i = 0; i < array.length; i++) {
    if(!testFun(array[i])) {
      return false;
    }
  }
  return true;
}
//console.log(every([NaN, NaN, NaN], isNaN));
//console.log(every([NaN, NaN, 4], isNaN));

function some(array, testFun) {
  for (var i = 0; i < array.length; i++) {
    if(testFun(array[i])) {
      return true;
    }
  }
  return false;
}
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));
