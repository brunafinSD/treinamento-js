const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

const storyText = 'Era quatro e meia passava um pouquinho, o :insertx: rasgava o barjão. Era o :inserty:, que vinha apontando e logo parando na :insertz:. Meu corpo tremia meus olhos molhados, Bob do lado e a mala no chão — Beijei o seu rosto e disse na hora o :insertx: te esperava no mundão.';

const insertX = ["Fosco clarinho", "O vento gelado", "Sol do amanhecer"];
const insertY = ["carro blindado", "trem noturno", "corsel vermelho"];
const insertZ = ["velha estação", "padaria da esquina", "tia cuca"];

randomize.addEventListener('click', result);


function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    newStory = newStory.replace(':insertx:', xItem);

    if (customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    // if (document.getElementById("uk").checked) {
    //     let weight = Math.round(300);
    //     let temperature = Math.round(94);

    // }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}

