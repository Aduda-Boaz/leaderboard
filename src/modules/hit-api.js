export default class Score {
  constructor() {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DIvC379OvteODU5bAfDN/scores';
    this.listScore = document.querySelector('.list');
  }

  getAPIScores = async () => {
    const response = await fetch(this.url);

    const resObj = await response.json();
    this.showListElement(resObj.result);
  };

  setAPIScores = async (newName, newScore) => {
    await fetch(this.url, {
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

  showListElement = (array) => {
    array.sort((a, b) => b.score - a.score);
    array.forEach((element) => {
      const lib = document.createElement('li');
      lib.className = ('list');
      const par1 = document.createElement('p');
      par1.innerText = `${element.user}`;
      par1.className = ('user');
      lib.appendChild(par1);
      const par2 = document.createElement('p');
      par1.innerText = `${element.score}`;
      par1.className = ('score');
      lib.appendChild(par2);
    });
  }
}

export const score = new Score();