// Weather-Activity-Planner.js
// Q5: Advise activity based on temperature, rain, and wind speed

const temperature = 22; // degrees Celsius - change to test
const isRaining = false;
const windSpeed = 12; // km/h

let advice;

// If raining, immediate instruction takes precedence
if (isRaining) {
  advice = 'Stay indoors with hot coffee.';
} else if (temperature > 35) {
  advice = 'Go swimming.';
} else if (temperature < 15 && windSpeed > 20) {
  advice = 'Too cold and windy — stay home.';
} else {
  advice = 'Perfect day for a walk.';
}

console.log(`Temp: ${temperature}°C, Raining: ${isRaining}, Wind: ${windSpeed} km/h`);
console.log('Advice:', advice);
