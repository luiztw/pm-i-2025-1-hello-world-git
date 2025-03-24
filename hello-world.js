const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');

nameInput.onkeyup = (event) => {
    if (nameInput.value === '') {
        messageP.innerText = '';
    } else if (event.key === 'Enter'){
        helloWorld();
    } else if (event.key === 'Escape'){
        nameInput.value = '';
    }
}

const helloWorld = () => {
    messageP.innerText = `Hello World, ${nameInput.value}!`;
}

const limpartexto = () => {
    nameInput.value = '';
    messageP.innerText = '';
}