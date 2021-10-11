import generateRandomNumber from '../utils.js';
import beginGame from '../game-engine.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

function calcGcd(firstNum, secondNum) {
  if (!secondNum) {
    return firstNum;
  }
  return calcGcd(secondNum, firstNum % secondNum);
}

function generateRoundData() {
  const firstNumber = generateRandomNumber(0, 101);
  const secondNumber = generateRandomNumber(0, 101);
  return {
    question: `${firstNumber} ${secondNumber}`,
    correctAnswer: calcGcd(firstNumber, secondNumber).toString(),
  };
}

function initGame() {
  beginGame(generateRoundData, gameRule);
}

export default initGame;
