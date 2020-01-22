'use strict';

// Defines kelvin
const kelvin = 0;

//Define celsius
const celsius = kelvin - 273;

//Define fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//Make fahrenheit a complete number
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);