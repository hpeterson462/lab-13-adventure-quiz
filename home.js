// import functions and grab DOM elements
import { makeUser, setUser } from './user-utils.js';

const form = document.querySelector('form');
// initialize state

// set event listeners to update state and DOM
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const user = makeUser(formData);

    setUser(user);
    /*const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);*/

    window.location = './map/map.html';
});