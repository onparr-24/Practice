//This is the constant value for the variable kelvin
const kelvin = 0;
//Celsius is always 273 less than Kelvin.
let celsius = kelvin - 273;
//fahrenheit is 9/5 celsius plus 32
let fahrenheit = celsius * (9/5) + 32;
//rounds fahrenheit down to nearest whole number
fahrenheit = Math.floor(fahrenheit);
//converts celsius to Newton
let newton = celsius * (33/100);
//rounds newton down
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton`);