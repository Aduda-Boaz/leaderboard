import { score } from './hit-api.js';

export default class Scoreboard {
  constructor() {
    this.refresh = document.querySelector('.refresh-btn');
    this.inputName = document.querySelector('#user');
    this.inputScore = document.querySelector('#score');
    this.submitInfo = document.querySelector('.add-btn');
  }

  addScoreToList = () => {
    this.submitInfo.addEventListener('click', () => {
      if (this.inputName.value && this.inputScore.value) {
        if (/^\d+$/.test(this.inputScore.value)) {
          score.setAPIScores(this.inputName.value, this.inputScore.value);
          this.inputName.value = '';
          this.inputScore.value = '';
          this.showSuccessMessage();
          setTimeout(this.removeSuccessMessage, 1000);
        } else {
          this.showErrorMessage();
          setTimeout(this.removeErrorMessage, 1000);
        }
      } else {
        this.showValidationMessage();
        setTimeout(this.removeValidationMessage, 1000);
      }
    });
  }

  showSuccessMessage = () => {
    const successMessage = document.createElement('p');
    successMessage.textContent = ('Score created successfully');
    successMessage.className = ('success-message');
    this.inputScore.parentNode.appendChild(successMessage);
  }

  removeSuccessMessage = () => {
    const successMessage = document.querySelector('.success-message');
    this.inputScore.parentNode.removeChild(successMessage);
  }

  showErrorMessage = () => {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = ('Enter a vilid score');
    errorMessage.className = ('error-message');
    this.inputScore.parentNode.appendChild(errorMessage);
  }

  removeErrorMessage = () => {
    const errorMessage = document.querySelector('.error-message');
    this.inputScore.parentNode.removeChild(errorMessage);
  }

  showValidationMessage = () => {
    const message = document.createElement('p');
    message.textContent = ('fill the form');
    message.className = ('message');
    this.inputScore.parentNode.appendChild(message);
  }

  removeValidationMessage = () => {
    const message = document.querySelector('.message');
    this.inputScore.parentNode.removeChild(message);
  }

  refreshScores = () => {
    this.refresh.addEventListener('click', () => {
      window.location.reload();
    });
  }
}

export const newScoreList = new Scoreboard();
newScoreList.refreshScores();