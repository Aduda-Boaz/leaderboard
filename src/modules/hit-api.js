import { createScoreListElement } from './scores.js';

const GAME_CODE = 'DIvC379OvteODU5bAfDN';
const GAME_ADDRESS = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${GAME_CODE}/scores`;

const getAPIScores = async () => {
  const RESPONSE = await fetch(GAME_ADDRESS);

  const RESPONSE_OBJECT = await RESPONSE.json();

  createScoreListElement(RESPONSE_OBJECT.result);
};

const setAPIScores = async (newName, newScore) => {
  await fetch(GAME_ADDRESS, {
    method: 'POST',
    body: JSON.stringify({
      user: newName,
      score: newScore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export { getAPIScores, setAPIScores };