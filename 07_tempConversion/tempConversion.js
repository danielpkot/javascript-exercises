const convertToCelsius = function(fahrenheit) {
  celsius = (fahrenheit-32)*(5/9)
  if (celsius == 0){
    return 0
  }
  return celsius = +(celsius.toFixed(1))
};

const convertToFahrenheit = function(celsius) {
  fahrenheit = (celsius * 9/5) + 32
  if (fahrenheit == 0){
    return 0
  }
  console.log(fahrenheit.toFixed(1))
  return fahrenheit = +(fahrenheit.toFixed(1))

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
