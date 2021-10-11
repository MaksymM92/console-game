import generateRandomNumber from '../utils.js';
import beginGame from '../game-engine.js';

const gameRule = 'Answer yes if the number is even, otherwise answer no.';

function isEven(value) {
  return value % 2 === 0;
}

function generateRoundData() {
  const randomNumber = generateRandomNumber(0, 101);
  return {
    question: randomNumber.toString(),
    correctAnswer: isEven(randomNumber) ? 'yes' : 'no',
  };
}

function initGame() {
  beginGame(generateRoundData, gameRule);
}

export default initGame;
