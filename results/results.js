import { getUser } from '../user-utils.js';

const userResults = getUser();

const userHp = userResults.hp;
const userGold = userResults.gold;

/*const main = document.querySelector('main');
const displayMessage = document.createElement('h3');
displayMessage.textContent = 'The road goes ever on...';
displayMessage.style.backgroundColor = 'var(--color2)';
displayMessage.style.display = 'flex';
displayMessage.style.alignItems = 'center';
displayMessage.style.justifyContent = 'center';
main.append('displayMessage');*/


const section = document.querySelector('section');
const resultsHpDiv = document.createElement('div');
resultsHpDiv.textContent = userHp;
resultsHpDiv.style.backgroundColor = 'var(--color2)';
resultsHpDiv.style.display = 'flex';
resultsHpDiv.style.alignItems = 'center';
resultsHpDiv.style.justifyContent = 'center';

const resultsGoldDiv = document.createElement('div');
resultsGoldDiv.textContent = userGold;
resultsGoldDiv.style.backgroundColor = 'var(--color2)';
resultsGoldDiv.style.display = 'flex';
resultsGoldDiv.style.alignItems = 'center';
resultsGoldDiv.style.justifyContent = 'center';

section.append(resultsHpDiv);
section.append(resultsGoldDiv);
