const countCorrectAnswers = (selectedOptions) => {
  let score = 0;

  for (let key in Object.entries(selectedOptions)) {
    if (selectedOptions[key].isRight) {
      score++;
    }
  }

  return score;
};

export { countCorrectAnswers };
