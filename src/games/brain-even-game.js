import { generateRandomNumber } from '../utils.js';
import beginGame from '../game-engine.js';

function isEven(value) {
  return value % 2 === 0;
}

function generateRoundData() {
  const randomNumber = generateRandomNumber(0, 101);
  return {
    question: `${randomNumber}`,
    correctAnswer: isEven(randomNumber) ? 'yes' : 'no',
  };
}

function initGame() {
  const gameRule = 'Answer yes if the number is even, otherwise answer no.';
  const numberOfQuestions = 3;
  beginGame(generateRoundData, gameRule, numberOfQuestions);
}

export default initGame;
