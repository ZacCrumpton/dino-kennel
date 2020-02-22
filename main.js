const dinos = [4];

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
    console.log("helloworld", dinos)    
};

const init = () => {
document.getElementById("submit-new-dino").addEventListener('click', newDino)
};

init();

