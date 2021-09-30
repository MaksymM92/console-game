import readlineSync from 'readline-sync';

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function calcGcd(firstNum, secondNum) {
  if (!secondNum) {
    return firstNum;
  }
  return calcGcd(secondNum, firstNum % secondNum);
}

function initGame(name) {
  let answersCount = 0;

  while (answersCount < 3) {
    const firstNumber = generateRandomNumber(101);
    const secondNumber = generateRandomNumber(101);
    const correctAnswer = calcGcd(firstNumber, secondNumber);
    const question = `${firstNumber} ${secondNumber}`;
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
  console.log('Find the greatest common divisor of given numbers.');
  initGame(name);
}

export default greatUser;
