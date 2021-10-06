import {
  getUserAnswer,
  isAnswerInvalid,
  printWrongAnswer,
  printWrongInput,
  userWon,
} from './utils.js';

function processAnswer(gameConfig, name) {
  let userAnswer = getUserAnswer(gameConfig.question);
  userAnswer = gameConfig.anyAnswer ? +userAnswer : userAnswer;
  console.log(`Your answer: ${userAnswer}`);

  if (!gameConfig.anyAnswer && !isAnswerInvalid(userAnswer)) {
    printWrongInput(name);
    return false;
  }

  if (userAnswer !== gameConfig.correctAnswer) {
    printWrongAnswer(gameConfig.correctAnswer, userAnswer, name);
    return false;
  }

  if (userAnswer === gameConfig.correctAnswer) {
    console.log('Correct!');
  }
  return true;
}

function beginGame(configFunction, name) {
  let answersCount = 0;
  while (answersCount < 3) {
    const config = configFunction();
    if (!processAnswer(config, name)) {
      break;
    } else {
      answersCount += 1;
    }

    if (answersCount === 3) {
      userWon(name);
    }
  }
}

export default beginGame;
