import readlineSync from 'readline-sync';

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

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

function initGame(name) {
  let answersCount = 0;
  const operations = ['*', '-', '+'];
  while (answersCount < 3) {
    const operation = operations[generateRandomNumber(2)];
    const firstNumber = generateRandomNumber(31);
    const secondNumber = generateRandomNumber(31);
    const correctAnswer = calcEquation(operation, firstNumber, secondNumber);
    const question = `${firstNumber}${operation}${secondNumber}`;
    console.log('What is the result of the expression?');
    const userAnswer = readlineSync.question(`Question: ${question}\n`).toLowerCase().trim();
    console.log(`Your answer: ${userAnswer}`);

    if (+userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    if (+userAnswer === correctAnswer) {
      console.log('Correct!');
      answersCount += 1;
    }

    if (answersCount === 3) {
      console.log(`Congratulations, ${name}`);
    }
  }
}

function greatUser() {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  initGame(name);
}

export default greatUser;
