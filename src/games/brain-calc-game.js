import {
  sayHello,
  generateRandomNumber,
} from '../../utils/utils.js';
import beginGame from '../../utils/game-engine.js';

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

function generateGameConfig() {
  const operations = ['*', '-', '+'];
  const operation = operations[generateRandomNumber(0, operations.length - 1)];
  const firstNumber = generateRandomNumber(0, 101);
  const secondNumber = generateRandomNumber(0, 101);
  return {
    question: `${firstNumber} ${operation} ${secondNumber}`,
    correctAnswer: calcEquation(operation, firstNumber, secondNumber),
    anyAnswer: true,
  };
}

function greatUser() {
  const name = sayHello();
  console.log('What is the result of the expression?');
  beginGame(generateGameConfig, name);
}

export default greatUser;
