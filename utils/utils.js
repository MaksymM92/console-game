import readlineSync from 'readline-sync';

function sayHello() {
  console.log('Welcome to the Brain Games');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
}

function userWon(name) {
  console.log(`Congratulations, ${name}!`);
}

function getUserAnswer(question) {
  return readlineSync.question(`Question: ${question}\n`).toLowerCase().trim();
}

function isAnswerInvalid(answer) {
  return answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'no';
}

function printWrongInput(name) {
  console.log(`Sorry, but you enter incorrect answer. Let's try again, ${name}`);
}

function printWrongAnswer(correctAnswer, userAnswer, name) {
  console.log(`'${userAnswer}' is wrong answer ;(., Correct answer was '${correctAnswer}'..\nLet's try again, ${name}!`);
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export {
  sayHello,
  userWon,
  getUserAnswer,
  isAnswerInvalid,
  generateRandomNumber,
  printWrongInput,
  printWrongAnswer,
};
