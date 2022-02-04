import './style.css';
import { getAPIScores, setAPIScores } from './modules/hit-api.js';
import { createScoreListElement, appendListElement, clearForms } from './modules/scores.js';
import Score from './modules/singleScore.js';

const addToLocalStorage = (scores) => {
  localStorage.setItem('scores', JSON.stringify(scores));
};

const addScoreList = document.getElementById('add');
const refreshScoreList = document.getElementById('refresh');

const scores = new Score();

addScoreList.addEventListener('click', () => {
  const newName = document.getElementById('user').value;
  const newScore = document.getElementById('score').value;

  setAPIScores(newName, newScore);

  const listElement = createScoreListElement(newName, newScore);

  appendListElement(listElement);
  addToLocalStorage();
  clearForms();
});

const updateLocalStorage = (scores) => {
  appendListElement(scores);
  localStorage.clear();
  addToLocalStorage(scores);
};

const fromLocalStorage = () => {
  if (localStorage.length !== 0) {
    const scoresStored = JSON.parse(localStorage.getItem('scores'));
    scoresStored.listElement.forEach((user) => {
      scores.listElement.push(user);
    });
    updateLocalStorage(scores);
  }
  refreshScoreList();
};

fromLocalStorage();

refreshScoreList.addEventListener('click', () => getAPIScores());