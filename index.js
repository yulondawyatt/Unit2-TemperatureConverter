//Convert Fahrenheit to Celcisius

const convertToCelsius = (fahrenheit) => {
  let celcius = (fahrenheit - 30) / 2;
  return celcius;
}
  console.log(convertToCelsius(32));



//Output temperature in Celsius and a description based on the temperature in Fahrenheit

const describeTemperature = (fahrenheit) => {
  let celcius = (fahrenheit - 30) / 2;
  if(celcius <= 0) {
    return `It is ${celcius} degrees Celcius and brick cold!!`;
  } else if(celcius < 20){
    return `It is ${celcius} degrees Celcius and cold.`;
  } else if(celcius < 30) {
    return `It is ${celcius} degrees Celcius and goldilocks warm!`;
  } else if(celcius < 40) {
    return `It is ${celcius} degrees Celcius and HOT.`;
  } else if(celcius <= 40) {
    return `It is ${celcius} degrees Celcius -- "eggs cooking on a concrete sidewalk" HOT!!`;
  } else {
    return `It is ${celcius} degrees Celcius -- Are we still alive?!`;
  }
}
  const userFahrenTemp = prompt('What is the temperature in Fahrenheit?');
  const description = describeTemperature(userFahrenTemp);
  alert(description);