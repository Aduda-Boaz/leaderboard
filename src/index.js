import './style.css';
import apiData from './modules/hit-api.js';
import {
  nameInput, refreshBtn, scoreInput, submitBtn,
} from './modules/scores.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DIvC379OvteODU5bAfDN/scores';

submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  await apiData(url, { user: nameInput.value, score: scoreInput.value });
  nameInput.value = '';
  scoreInput.value = '';
  const msg = document.getElementById('alart');
  setTimeout(() => { msg.innerHTML = 'Score added successfully'; }, 1000);
  setTimeout(() => { msg.innerHTML = ''; }, 4000);
});

const listItems = document.getElementsByClassName('list')[0];

async function showScores() {
  listItems.innerHTML = '';
  const { result: scores } = await fetch(url)
    .then((resp) => resp.json());
  scores.forEach((result) => {
    const item = document.createElement('li');
    item.innerHTML = `${result.user}: ${result.score}`;
    listItems.appendChild(item);
  });
}

refreshBtn.addEventListener('click', showScores);
window.onload = showScores;