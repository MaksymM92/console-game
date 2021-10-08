import { generateRandomNumber } from '../utils.js';
import beginGame from '../game-engine.js';

function generateProgression(startNumber, step, length) {
  const progression = [startNumber];
  let count = 0;
  while (count < length) {
    progression.push(progression[count] + step);
    count += 1;
  }
  return progression;
}

function generateRoundData() {
  const startNumber = generateRandomNumber(0, 100);
  const step = generateRandomNumber(0, 10);
  const progressionArray = generateProgression(startNumber, step, 9);
  const droppedNumIndex = generateRandomNumber(0, 9);
  const answer = progressionArray[droppedNumIndex];
  progressionArray[droppedNumIndex] = '..';
  return {
    question: progressionArray.join(' '),
    correctAnswer: answer.toString(),
  };
}

function initGame() {
  const gameRule = 'What number is missing in the progression?';
  const numberOfQuestions = 3;
  beginGame(generateRoundData, gameRule, numberOfQuestions);
}

export default initGame;
