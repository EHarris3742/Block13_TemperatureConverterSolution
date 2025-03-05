/**
 * Takes a Fahrenheit temperature and returns the temperature in Celsius
 * @param {string} fahren - Temperature in degrees Fahrenheit
 * @returns {number} - Temperature in degrees Celsius
 */
function convertToCelsius(fahren) {
  return (fahren - 32) * (5 / 9);
}

/**
 * Takes a Fahrenheit temperature and its Celsius equivalent and returns a message based on the temperature range
 * @param {number} fahren - Temperature in degrees Fahrenheit
 * @returns {string} - Message indicating how the temperature feels
 */
function createMessage(fahren) {
  if (fahren < 32) {
    return `The temperature ${fahren}°F (${celc}°C) feels very cold.`;
  } else if (fahren < 64) {
    return `The temperature ${fahren}°F (${celc}°C) feels cold.`;
  } else if (fahren < 86) {
    return `The temperature ${fahren}°F (${celc}°C) feels warm.`;
  } else if (fahren < 100) {
    return `The temperature ${fahren}°F (${celc}°C) feels hot.`;
  } else {
    return `The temperature ${fahren}°F (${celc}°C) is extremely hot!`;
  }
}

/**
 * Generates a random integer between 0 and the given limit
 * @param {number} limit - Upper limit for the random number
 * @returns {number} - Random integer between 0 and the limit
 */
function rand(limit) {
  return Math.floor(Math.random() * (limit + 1));
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "Enter a number, we will convert that number from Fahrenheit to Celsius \n"
);

fahren = prompt(
  "Let's try that again. Enter a number, we will convert that number from Fahrenheit to Celsius \n"
);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
