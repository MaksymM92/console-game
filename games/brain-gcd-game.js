import {
  sayHello,
  getUserAnswer,
  generateRandomNumber,
  printWrongAnswer,
  calcGcd,
} from '../utils/utils.js';

function initGame(name) {
  let answersCount = 0;

  while (answersCount < 3) {
    const firstNumber = generateRandomNumber(101);
    const secondNumber = generateRandomNumber(101);
    const correctAnswer = calcGcd(firstNumber, secondNumber);
    const question = `${firstNumber} ${secondNumber}`;
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
  console.log('Find the greatest common divisor of given numbers.');
  initGame(name);
}

export default greatUser;
