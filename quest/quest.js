import quests from '../data/data.js';
import { findById, renderSection } from './quest-utils.js';

const main = document.querySelector('main');
const params = new URLSearchParams(window.location.search);
const nextButton = document.querySelector('#next');
const questId = params.get('id');
const questData = findById(quests, questId);
const sectionEl = renderSection(questData);

nextButton.addEventListener('click', () => {
    window.location = '../map/map.html';
});

main.append(sectionEl);