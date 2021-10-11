import readlineSync from 'readline-sync';

function beginGame(generateRoundData, gameRule) {
  const numberOfQuestions = 3;
  console.log('Welcome to the Brain Games');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const roundData = generateRoundData();
    const userAnswer = readlineSync.question(`Question: ${roundData.question}\n`).toLowerCase().trim();
    console.log(`Your answer: ${userAnswer}`);

    if (userAnswer !== roundData.correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(., Correct answer was '${roundData.correctAnswer}'..`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}

export default beginGame;
