const convertToCelsius = function(fahrenheit) {
  let celsius = parseFloat(((fahrenheit-32)*5/9).toFixed(1));
  if (celsius % 1 === 0){
    return Math.floor(celsius);
  }
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = parseFloat(((celsius*(9/5))+32).toFixed(1));
  if (fahrenheit % 1 === 0){
    return Math.floor(fahrenheit);
  }
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
