import quests from '../data/data.js';
import { renderSection } from './quest-utils.js';
import { findById } from '../user-utils.js';

const main = document.querySelector('main');
const params = new URLSearchParams(window.location.search);

const nextButton = document.getElementById('next');
nextButton.classList.add('hidden');


const questId = params.get('id');
const questData = findById(quests, questId);
const sectionEl = renderSection(questData);

nextButton.addEventListener('click', () => {
    window.location = '../map/map.html';
});

main.append(sectionEl);

