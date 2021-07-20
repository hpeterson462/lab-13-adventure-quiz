export function makeUser(formData) {
    return {
        name: formData.get('name'),
        class: formData.get('class'),
        hp: 35,
        gold: 0,
        completed: {}
    };
}

export function getUser() {
    const localStorageUser = localStorage.getItem('USER');

    return JSON.parse(localStorageUser);
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    return localStorage.setItem('USER', stringyUser);
}



export function findById(array, id) {
    let match;

    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            match = array[i];
            return match;
        }
    }
}