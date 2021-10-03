import {
  sayHello,
  getUserAnswer,
  generateRandomNumber,
  printWrongAnswer,
  generateProgression,
} from '../utils/utils.js';

function initGame(name) {
  let answersCount = 0;

  while (answersCount < 3) {
    const progressionArray = generateProgression();
    const droppedNumIndex = generateRandomNumber(9);
    const correctAnswer = progressionArray[droppedNumIndex];
    progressionArray[droppedNumIndex] = '..';
    const question = progressionArray.join(' ');
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
  console.log('What number is missing in the progression?');
  initGame(name);
}

export default greatUser;
