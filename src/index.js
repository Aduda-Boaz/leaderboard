import './style.css';
import { getAPIScores, setAPIScores } from './modules/hit-api.js';
import { createScoreListElement, appendListElement, clearForms } from './modules/scores.js';

const addScoreList = document.getElementById('add');
const refreshScoreList = document.getElementById('refresh');

const addToLocalStorage = (scores) => {
  localStorage.setItem('scores', JSON.stringify(scores));
};

addScoreList.addEventListener('click', () => {
  const newName = document.getElementById('user').value;
  const newScore = document.getElementById('score').value;

  setAPIScores(newName, newScore);

  const listElement = createScoreListElement(newName, newScore);

  appendListElement(listElement);
  addToLocalStorage();
  clearForms();
});

refreshScoreList.addEventListener('cleck', () => getAPIScores());