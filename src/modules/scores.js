const listScore = async (newList) => {
  const sendScore = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ul4d7IVkemOTTVg2fUdz/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: newList.user,
      score: newList.score,
    }),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });
  const json = await sendScore.json();
  return json;
};

const getScoreinfo = async () => {
  const getScore = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Ul4d7IVkemOTTVg2fUdz/scores/');
  const json = await getScore.json();
  return json;
};

export default class Score {
  constructor() {
    this.scoreItem = [];
  }

  addNewScoreList(newList, updateLocalStorageDOM) {
    listScore(newList).then(() => {
      this.scoreItem.push(newList);
      updateLocalStorageDOM(this);
      return this.scoreItem;
    });
  }

  removeFromList(updateLocalStorageDOM) {
    this.scoreItem.length = 0;
    getScoreinfo().then((json) => {
      this.scoreItem = json.result;
      updateLocalStorageDOM(this);
      return this.scoreItem;
    });
  }
}