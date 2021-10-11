import generateRandomNumber from '../utils.js';
import beginGame from '../game-engine.js';

const gameRule = 'What is the result of the expression?';

function calcEquation(operation, firstNumber, secondNumber) {
  let value;
  switch (operation) {
    case '+':
      value = firstNumber + secondNumber;
      break;
    case '-':
      value = firstNumber - secondNumber;
      break;
    case '*':
      value = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  return value;
}

function generateRoundData() {
  const operations = ['*', '-', '+'];
  const operation = operations[generateRandomNumber(0, operations.length - 1)];
  const firstNumber = generateRandomNumber(0, 101);
  const secondNumber = generateRandomNumber(0, 101);
  return {
    question: `${firstNumber} ${operation} ${secondNumber}`,
    correctAnswer: calcEquation(operation, firstNumber, secondNumber).toString(),
  };
}

function initGame() {
  beginGame(generateRoundData, gameRule);
}

export default initGame;
