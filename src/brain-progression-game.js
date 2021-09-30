import readlineSync from 'readline-sync';

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
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

function initGame(name) {
  let answersCount = 0;

  while (answersCount < 3) {
    const progressionArray = generateProgression();
    const droppedNumIndex = generateRandomNumber(9);
    const correctAnswer = progressionArray[droppedNumIndex];
    progressionArray[droppedNumIndex] = '..';
    const question = progressionArray.join(' ');
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
  console.log('What number is missing in the progression?');
  initGame(name);
}

export default greatUser;
