import {
  sayHello,
  getUserAnswer,
  generateRandomNumber,
  printWrongAnswer,
  calcEquation,
} from '../utils/utils.js';

function initGame(name) {
  let answersCount = 0;
  const operations = ['*', '-', '+'];
  while (answersCount < 3) {
    const operation = operations[generateRandomNumber(2)];
    const firstNumber = generateRandomNumber(101);
    const secondNumber = generateRandomNumber(101);
    const correctAnswer = calcEquation(operation, firstNumber, secondNumber);
    const question = `${firstNumber}${operation}${secondNumber}`;
    const userAnswer = getUserAnswer(question);
    console.log(`Your answer: ${userAnswer}`);

    if (+userAnswer !== correctAnswer) {
      printWrongAnswer(correctAnswer, userAnswer, name);
      break;
    }

    if (+userAnswer === correctAnswer) {
      console.log('Correct!');
      answersCount += 1;
    }

    if (answersCount === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}

function greatUser() {
  const name = sayHello();
  console.log('What is the result of the expression?');
  initGame(name);
}

export default greatUser;
