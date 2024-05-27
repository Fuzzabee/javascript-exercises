const convertToCelsius = function(temperatureToConvert) {
  let convertedTemperature = (temperatureToConvert - 32) * (5/9);
  convertedTemperature = Math.round(convertedTemperature * 10) / 10;

  return convertedTemperature;
};

const convertToFahrenheit = function(temperatureToConvert) {
  let convertedTemperature = temperatureToConvert * (9/5) + 32;
  convertedTemperature = Math.round(convertedTemperature * 10) / 10;

  return convertedTemperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
