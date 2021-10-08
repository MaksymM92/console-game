function isAnswerInvalid(answer) {
  return answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'no';
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export {
  isAnswerInvalid,
  generateRandomNumber,
};
