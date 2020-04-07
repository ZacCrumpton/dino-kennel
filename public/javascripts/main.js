const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const dinos = [
    {
        id: 'dino1',
        name: 'Steve',
        type: 't-rex',
        age: 100,
        owner: 'Zoe',
        adventrues: [],
        health: 99,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81IrOfuA3LL._AC_SX425_.jpg'
    },
    {
        id: 'dino2',
        name: 'John',
        type: 'something',
        age: 50,
        owner: 'Zac',
        adventrues: [],
        health: 1,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81IrOfuA3LL._AC_SX425_.jpg'
    },
    {
        id: 'dino3',
        name: 'Smith',
        type: 'something3',
        age: 45,
        owner: 'Jacob',
        adventrues: [],
        health: 100,
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81IrOfuA3LL._AC_SX425_.jpg'
    }

];

const closeSingleViewEvent = () => {
    printToDom('single-view', '')
    printDinos(dinos);
}

const viewSingleDino = (e) => {
    const dinoId = e.target.closest('.card').id;
    const selectedDino = dinos.find((currentDino) =>  dinoId === currentDino.id)
    console.log(selectedDino)
    let domString = ''
    domString +=        `<div class="container">`;
    domString +=        `<div class="card">`;
    domString +=        `<button id="close-single-view" class="btn btn-outline-dark col-1"><i class="fas fa-times-circle"></i></button>`;
    domString +=        `<div class="row">`;
    domString +=        `<div class="col-6">`;
    domString +=        `<img class="image-fluid" src="${selectedDino.imageUrl}" alt="">`;
    domString +=        `</div>`;
    domString +=        `<div class="col-6">`;
    domString +=        `<h2>${selectedDino.name}</h2>`;
    domString +=        `<p>Owner: ${selectedDino.owner}</p>`;
    domString +=        `<p>Type: ${selectedDino.type}</p>`;
    domString +=        `<p>Age ${selectedDino.age}</p>`;
    domString +=        `<div class="progress">`
    domString +=        `<div class="progress-bar bg-danger" role="progressbar" style="width: ${selectedDino.health}%" aria-valuenow="${selectedDino.health}" aria-valuemin="0" aria-valuemax="100"></div>`
    domString +=        `</div>`
    domString +=        `</div>`;
    domString +=        `</div>`;
    domString +=        `</div>`;
    domString +=        `</div>`;
    
    printToDom('kennel', '');
    printToDom('single-view', domString)
    document.getElementById('close-single-view').addEventListener('click', closeSingleViewEvent)
}

const dinoHealth = (e) => {
    const dinoId = e.target.closest('.card').id;
    const dinoPosition = dinos.findIndex((p) => p.id === dinoId);
    if(dinos[dinoPosition].health < 100) {
        dinos[dinoPosition].health += 1;
        //+= means take whats currently there and add 1
        printDinos(dinos);
    }
}

const petEvents = () => {
    const dinoPetButtons =  document.getElementsByClassName('dino-photo');
    for(let i = 0; i < dinoPetButtons.length; i++){
        dinoPetButtons[i].addEventListener('mouseenter', dinoHealth);
    }
}

const singleDinoAddEvents = () => {
    const dinoViewButton =  document.getElementsByClassName('single-dino');
    for(let i = 0; i < dinoViewButton.length; i++){
        dinoViewButton[i].addEventListener('click', viewSingleDino);
    }
}

const deleteDinoEvent = (e) => {
    const dinoId = e.target.closest('.card').id;
    const dinoPosition = dinos.findIndex((p) => p.id === dinoId);
    dinos.splice(dinoPosition, 1);
    printDinos(dinos);
}

const deleteEvents = () => {
    const dinoDeleteButtons =  document.getElementsByClassName('delete-dino');
    for(let i = 0; i < dinoDeleteButtons.length; i++){
        dinoDeleteButtons[i].addEventListener('click', deleteDinoEvent);
    }   
}

const feedDinoEvent = (e) => {
    const dinoId = e.target.closest('.card').id;
    const dinoPosition = dinos.findIndex((p) => p.id === dinoId);
    if(dinos[dinoPosition].health < 90) {
        dinos[dinoPosition].health += 10;
        printDinos(dinos);
    }
    else if(dinos[dinoPosition].health > 89 && dinos[dinoPosition].health < 100){
        dinos[dinoPosition].health = 100;
        printDinos(dinos);
    }
}

const feedEvents = () => {
    const dinoFeedButtons =  document.getElementsByClassName('feed-dino');
    for(let i = 0; i < dinoFeedButtons.length; i++){
        dinoFeedButtons[i].addEventListener('click', feedDinoEvent);
    }   
}

const printDinos = (dinoArr) => {
    let domString = '';
    for(i = 0; i < dinoArr.length; i++){
        domString +=    `<div class="col-4">`;
        domString +=    `<div id="${dinoArr[i].id}" class="card">`;
        domString +=    `<img src="${dinoArr[i].imageUrl}" class="card-img-top dino-photo" alt="Card image cap">`;
        domString +=    `<div class="card-body">`;
        domString +=    `<h5 class="card-title">${dinoArr[i].name}</h5>`;
        domString +=    `<div class="progress">`
        domString +=    `<div class="progress-bar bg-danger" role="progressbar" style="width: ${dinoArr[i].health}%" aria-valuenow="${dinoArr[i].health}" aria-valuemin="0" aria-valuemax="100"></div>`
        domString +=    `</div>`
        domString +=    `<button class="btn btn-outline-dark feed-dino"><i class="fas fa-apple-alt"></i></button>`
        domString +=    `<button class="btn btn-outline-dark single-dino"><i class="fas fa-eye"></i></button>`
        domString +=    `<button class="btn btn-outline-dark delete-dino"><i class="fas fa-trash"></i></button>`
        domString +=    `</div>`;
        domString +=    `</div>`;
        domString +=    `</div>`;
    }
    printToDom('kennel', domString);
    singleDinoAddEvents();
    petEvents();
    deleteEvents();
    feedEvents();
}



const newDino = (e) => {
    e.preventDefault();
    const brandNewDino = {
        id: `dino${dinos.length + 1}`,
        name: document.getElementById('dino-name').value,
        type: document.getElementById('dino-type').value,
        age: document.getElementById('dino-age').value,
        owner: document.getElementById('dino-owner').value,
        adventrues: [],
        health: 100,
        imageUrl: document.getElementById('dino-image').value
    }
    dinos.push(brandNewDino);
    document.getElementById('new-dino-form').reset();
    document.getElementById('collapseOne').classList.remove('show');
    printDinos(dinos);
};

const init = () => {
document.getElementById("submit-new-dino").addEventListener('click', newDino)
printDinos(dinos)

};

init();

