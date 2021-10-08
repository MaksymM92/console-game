import readlineSync from 'readline-sync';
import { isAnswerInvalid } from './utils.js';

function beginGame(roundDataFunction, gameRule, numberOfQuestions) {
  console.log('Welcome to the Brain Games');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numberOfQuestions; i++) {
    const roundData = roundDataFunction();
    const userAnswer = readlineSync.question(`Question: ${roundData.question}\n`).toLowerCase().trim();
    console.log(`Your answer: ${userAnswer}`);

    if (!isAnswerInvalid(userAnswer) && isAnswerInvalid(roundData.correctAnswer)) {
      console.log(`Sorry, but you enter incorrect answer. Let's try again, ${name}`);
      return;
    }

    if (userAnswer !== roundData.correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(., Correct answer was '${roundData.correctAnswer}'..`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    if (userAnswer === roundData.correctAnswer) {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${name}!`);
}

export default beginGame;
