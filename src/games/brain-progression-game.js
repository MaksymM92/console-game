import generateRandomNumber from '../utils.js';
import beginGame from '../game-engine.js';

const gameRule = 'What number is missing in the progression?';

function generateProgression(startNumber, step, length) {
  const progression = [];
  let index = 0;
  while (index < length) {
    const current = startNumber + index * step;
    progression.push(current);
    index += 1;
  }
  return progression;
}

function generateRoundData() {
  const startNumber = generateRandomNumber(0, 100);
  const step = generateRandomNumber(0, 10);
  const progression = generateProgression(startNumber, step, 9);
  const droppedNumIndex = generateRandomNumber(0, progression.length);
  const answer = progression[droppedNumIndex];
  progression[droppedNumIndex] = '..';
  return {
    question: progression.join(' '),
    correctAnswer: answer.toString(),
  };
}

function initGame() {
  beginGame(generateRoundData, gameRule);
}

export default initGame;
