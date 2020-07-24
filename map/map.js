import quests from '../data/data.js';
import { getUser } from '../user-utils.js';

const user = getUser();

if (user.hp <= 0) {
    alert('Your quest has come to an end.');
    alert('You have ' + user.gold + ' gold, but your name lives on in books and legends.');
    window.location = '../results/results.html';
}

const section = document.querySelector('section');

let completedQuests = 0;

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];

    if (user.completed[quest.id]) {
        completedQuests++;
    }
}

if (completedQuests === quests.length) {
    alert('And you lived happily til the end of your days. You have ' + user.gold + ' gold.');

    window.location = '../results/results.html';
}

for (let i = 0; i < quests.length; i++) {
    const quest = quests[i];

    if (user.completed[quest.id]) {
        const span = document.createElement('span');
        span.textContent = quest.title;

        section.append(span);
    } else {
        const link = document.createElement('a');
        link.textContent = quest.title;
        link.href = '/quest/quest.html?id=' + quest.id;

        section.append(link);
    }
}