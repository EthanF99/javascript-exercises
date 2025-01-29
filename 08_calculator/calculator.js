const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(nums) {
	return nums.reduce((total, current) => {return total + current;}, 0);
};

const multiply = function(nums) {
	return nums.reduce((total, current) => {return total * current;});
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  let total = 1;
  for (let current = a; current > 0; current--){
    total *= current;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
