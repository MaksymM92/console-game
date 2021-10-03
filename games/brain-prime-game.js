import {
  sayHello,
  getUserAnswer,
  isAnswerInvalid,
  isPrime,
  generateRandomNumber,
  printWrongInput,
  printWrongAnswer,
} from '../utils/utils.js';

function initGame(name) {
  let answersCount = 0;

  while (answersCount < 3) {
    const randomNumber = generateRandomNumber(100);
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    const userAnswer = getUserAnswer(randomNumber);
    console.log(`Your answer: ${userAnswer}`);

    if (!isAnswerInvalid(userAnswer)) {
      printWrongInput(name);
      break;
    }
    if (correctAnswer !== userAnswer) {
      printWrongAnswer(correctAnswer, userAnswer, name);
      break;
    }
    if (correctAnswer === userAnswer) {
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
  console.log('Answer yes if given number is prime. Otherwise answer no.');
  initGame(name);
}

export default greatUser;
