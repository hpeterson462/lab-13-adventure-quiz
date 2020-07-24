import { findById, getUser, setUser } from '../user-utils.js';

export function renderSection(quest) {
    const section = document.createElement('section');
    const div = document.createElement('div');
    div.textContent = quest.title;
    section.append(div);

    const img = document.createElement('img');
    img.src = quest.image;
    div.append(img);

    const form = document.createElement('form');
    const description = document.createElement('div');
    description.textContent = quest.description;
    form.append(description);

    for (let i = 0; i < quest.choices.length; i++) {
        const label = document.createElement('label');
        const labelDiv = document.createElement('div');
        const choices = quest.choices[i];

        labelDiv.textContent = choices.description;
        const input = document.createElement('input');

        input.type = 'radio';
        input.name = 'choices';
        input.value = 'choices.id';

        label.append(labelDiv, input);
        form.append(label);
    }

    const button = document.createElement('button');
    button.textContent = 'Submit';

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        //data from radio button
        const formData = new FormData(form);
        const choiceId = formData.get('choices');
        const results = findById(quest.choices, choiceId);

        const user = getUser();

        //update local storage
        user.gold += results.gold;
        user.hp += results.hp;
        user.completed[quest.id] = true;

        window.location = './map/map.html';

        setUser();

        const resultDiv = document.querySelector('#result');
        resultDiv.textContent = results.result;

        const nextButton = document.querySelector('#result');

        nextButton.classList.remove('hidden');
    });

    form.append(button);
    section.append(div, img, form);

    return section;
}
