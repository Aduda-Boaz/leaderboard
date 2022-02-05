import './style.css';
import { score } from './modules/hit-api.js';
import { newScoreList } from './modules/scores.js';

window.onload = () => {
  score.getAPIScores();
  newScoreList.addScoreToList();
};
