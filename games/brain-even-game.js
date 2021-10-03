import {
  sayHello,
  getUserAnswer,
  generateRandomNumber,
  printWrongAnswer,
  isAnswerInvalid,
  isEven,
  printWrongInput,
} from '../utils/utils.js';

function initGame(name) {
  let answersCount = 0;

  while (answersCount < 3) {
    const randomNumber = generateRandomNumber(101);
    const isEvenNum = isEven(randomNumber);
    const userAnswer = getUserAnswer(randomNumber);
    console.log(`Your answer: ${userAnswer}`);

    if (!isAnswerInvalid(userAnswer)) {
      printWrongInput(name);
      break;
    }
    if (isEvenNum !== userAnswer) {
      printWrongAnswer(isEvenNum, userAnswer, name);
      break;
    }
    if (isEvenNum === userAnswer) {
      console.log('Correct!');
      answersCount += 1;
    }
  }

  if (answersCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

function greatUser() {
  const name = sayHello();
  console.log('Answer yes if the number is even, otherwise answer no.');
  initGame(name);
}

export default greatUser;
