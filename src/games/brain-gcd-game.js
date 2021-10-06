import {
  sayHello,
  generateRandomNumber,
} from '../../utils/utils.js';
import beginGame from '../../utils/game-engine.js';

function calcGcd(firstNum, secondNum) {
  if (!secondNum) {
    return firstNum;
  }
  return calcGcd(secondNum, firstNum % secondNum);
}

function generateGameConfig() {
  const firstNumber = generateRandomNumber(0, 101);
  const secondNumber = generateRandomNumber(0, 101);
  return {
    question: `${firstNumber} ${secondNumber}`,
    correctAnswer: calcGcd(firstNumber, secondNumber),
    anyAnswer: true,
  };
}

function greatUser() {
  const name = sayHello();
  console.log('Find the greatest common divisor of given numbers.');
  beginGame(generateGameConfig, name);
}

export default greatUser;
