import readlineSync from 'readline-sync';

function isAnswerInvalid(answer) {
  return answer.toLowerCase() !== 'yes' || answer.toLowerCase() !== 'no';
}

function isEven(value) {
  return value % 2 === 0 ? 'yes' : 'no';
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 101);
}

function initGame(name) {
  let answersCount = 0;

  while (answersCount < 3) {
    const randomNumber = generateRandomNumber();
    const isEvenNum = isEven(randomNumber);
    const userAnswer = readlineSync.question(`Question: ${randomNumber}\n`).toLowerCase().trim();
    if (!isAnswerInvalid(userAnswer)) {
      console.log(`Sorry, but you enter incorrect answer. Let's try again, ${name}`);
      break;
    }
    if (isEvenNum !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(., Correct answer was '${isEvenNum}'..\nLet's try again, ${name}`);
      break;
    }
    if (isEvenNum === userAnswer) {
      console.log(`Your answer: ${userAnswer}\nCorrect!`);
      answersCount += 1;
    }
  }

  if (answersCount === 3) {
    console.log(`Congratulations, ${name}`);
  }
}

function greatUser() {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer yes if the number is even, otherwise answer no.');
  initGame(name);
}

export default greatUser;
