import {
  sayHello,
  generateRandomNumber,
} from '../../utils/utils.js';
import beginGame from '../../utils/game-engine.js';

function isEven(value) {
  return value % 2 === 0 ? 'yes' : 'no';
}

function generateGameConfig() {
  const randomNumber = generateRandomNumber(0, 101);
  return {
    question: `${randomNumber}`,
    correctAnswer: isEven(randomNumber),
    anyAnswer: false,
  };
}

function greatUser() {
  const name = sayHello();
  console.log('Answer yes if the number is even, otherwise answer no.');
  beginGame(generateGameConfig, name);
}

export default greatUser;
