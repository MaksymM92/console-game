import readlineSync from 'readline-sync';

function sayHello() {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
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
      value = '';
      break;
  }
  return value;
}

function calcGcd(firstNum, secondNum) {
  if (!secondNum) {
    return firstNum;
  }
  return calcGcd(secondNum, firstNum % secondNum);
}

function generateProgression() {
  const startNumber = generateRandomNumber(100);
  const arr = [startNumber];
  const step = generateRandomNumber(10);
  let count = 0;
  while (count < 9) {
    arr.push(arr[count] + step);
    count += 1;
  }
  return arr;
}

function isEven(value) {
  return value % 2 === 0 ? 'yes' : 'no';
}

function isPrime(number) {
  // eslint-disable-next-line no-plusplus
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

export {
  sayHello,
  getUserAnswer,
  isAnswerInvalid,
  isPrime,
  generateRandomNumber,
  printWrongInput,
  printWrongAnswer,
  calcGcd,
  generateProgression,
  isEven,
  calcEquation,
};
