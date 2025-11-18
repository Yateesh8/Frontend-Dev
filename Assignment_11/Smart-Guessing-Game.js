// Smart-Guessing-Game.js
// Q7: Random secret number 1-50 and test userGuess
const secret = Math.floor(Math.random() * 50) + 1;
const userGuess = 27; // test guess - change to try different scenarios

if (userGuess === secret) {
  console.log('Correct guess! Secret was', secret);
} else if (Math.abs(userGuess - secret) <= 3) {
  console.log('Very close! Your guess:', userGuess, 'Secret:', secret);
} else if (userGuess > secret) {
  console.log('Too high. Your guess:', userGuess, 'Secret:', secret);
} else {
  console.log('Too low. Your guess:', userGuess, 'Secret:', secret);
}
