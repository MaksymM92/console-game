import {
  sayHello,
  generateRandomNumber,
} from '../../utils/utils.js';
import beginGame from '../../utils/game-engine.js';

function generateProgression(startNumber, step, length) {
  const progression = [startNumber];
  let count = 0;
  while (count < length) {
    progression.push(progression[count] + step);
    count += 1;
  }
  return progression;
}

function generateGameConfig() {
  const startNumber = generateRandomNumber(0, 100);
  const step = generateRandomNumber(0, 10);
  const progressionArray = generateProgression(startNumber, step, 9);
  const droppedNumIndex = generateRandomNumber(0, 9);
  const answer = progressionArray[droppedNumIndex];
  progressionArray[droppedNumIndex] = '..';
  return {
    question: progressionArray.join(' '),
    correctAnswer: answer,
    anyAnswer: true,
  };
}

function greatUser() {
  const name = sayHello();
  console.log('What number is missing in the progression?');
  beginGame(generateGameConfig, name);
}

export default greatUser;
