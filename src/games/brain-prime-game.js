import {
  sayHello,
  generateRandomNumber,
} from '../../utils/utils.js';
import beginGame from '../../utils/game-engine.js';

function isPrime(number) {
  // eslint-disable-next-line no-plusplus
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

function generateGameConfig() {
  const randomNumber = generateRandomNumber(0, 100);
  return {
    question: `${randomNumber}`,
    correctAnswer: isPrime(randomNumber) ? 'yes' : 'no',
    anyAnswer: false,
  };
}

function greatUser() {
  const name = sayHello();
  console.log('Answer yes if given number is prime. Otherwise answer no.');
  beginGame(generateGameConfig, name);
}

export default greatUser;
