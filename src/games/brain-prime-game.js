import { generateRandomNumber } from '../utils.js';
import beginGame from '../game-engine.js';

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
    question: `${randomNumber}`,
    correctAnswer: isPrime(randomNumber) ? 'yes' : 'no',
  };
}

function initGame() {
  const gameRule = 'Answer yes if given number is prime. Otherwise answer no.';
  const numberOfQuestions = 3;
  beginGame(generateRoundData, gameRule, numberOfQuestions);
}

export default initGame;
