import generateRandomNumber from '../utils.js';
import beginGame from '../game-engine.js';

const gameRule = 'Answer yes if given number is prime. Otherwise answer no.';

function isPrime(number) {
  // eslint-disable-next-line no-plusplus
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

function generateRoundData() {
  const randomNumber = generateRandomNumber(0, 100);
  return {
    question: randomNumber.toString(),
    correctAnswer: isPrime(randomNumber) ? 'yes' : 'no',
  };
}

function initGame() {
  beginGame(generateRoundData, gameRule);
}

export default initGame;
