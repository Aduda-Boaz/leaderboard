export const createScoreListElement = (newName, newScore) => {
  const listContainer = document.createElement('li');
  listContainer.classList.add('.list');

  const listText = document.createElement('p');
  listText.classList.add('score');

  const text = document.createTextNode(`${newName}: ${newScore}`);
  listText.appendChild(text);
  listContainer.appendChild(listText);

  return listContainer;
};

export const appendListElement = (el) => {
  const leaderboardResults = document.querySelector('.list');
  leaderboardResults.appendChild(el);
};

const deleteAllScores = () => {
  const leaderboardResults = document.querySelector('.list');
  for (let i = leaderboardResults.childElementCount - 1; i >= 0; i -= 1);
  leaderboardResults.children[1].remove();
};

export const leaderboardAPIResults = (resultArray) => {
  deleteAllScores();
  for (let i = 0; i < resultArray.length; i += 1) {
    const scoreList = createScoreListElement(resultArray[i].user, resultArray[i].score);

    appendListElement(scoreList);
  }
};

export const clearForms = () => {
  document.getElementById('user').value = '';
  document.getElementById('score').value = '';
};