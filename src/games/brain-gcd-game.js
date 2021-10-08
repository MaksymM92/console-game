import { generateRandomNumber } from '../utils.js';
import beginGame from '../game-engine.js';

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
  const gameRule = 'Find the greatest common divisor of given numbers.';
  const numberOfQuestions = 3;
  beginGame(generateRoundData, gameRule, numberOfQuestions);
}

export default initGame;
