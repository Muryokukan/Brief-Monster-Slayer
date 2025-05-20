let humanHealth = 100;
let monsterHealth = 100;

document.getElementById("start").addEventListener("click", function() {
    this.style.display = 'none';
    startGame();
});


const humanStock = document.getElementById('humanStock');
const monsterStock = document.getElementById('monsterStock');

humanStock.innerHTML = humanHealth;
monsterStock.innerHTML = monsterHealth;

function startGame() {
    document.querySelector('.list').style.removeProperty('display');
}

function attack() {
    let humanAttack = Math.floor(Math.random() * 10) + 3;
    let monsterAttack = Math.floor(Math.random() * 10) + 1;

    humanHealth -= monsterAttack;
    monsterHealth -= humanAttack;

    humanStock.innerHTML = humanHealth;
    monsterStock.innerHTML = monsterHealth;

    checkWin(humanHealth, monsterHealth);
    addHistory(humanAttack, monsterAttack);
}

function checkWin(humanHealth, monsterHealth) {
    if (humanHealth <= 0) {
        alert("Le monstre a gagné");
        resetGame();
    }
    if (monsterHealth <= 0) {
        alert("Le slayer a gagné");
        resetGame();
    }
}

function flee() {
    document.querySelector('.list').style.display = 'none';
    document.getElementById("start").style.display = 'block';
    alert("Le Slayer a pris la fuite !")
    resetGame();
}

function addHistory(humanAttack, monsterAttack) {
    const newItem = document.createElement('li');
    newItem.textContent = `Le Slayer a infligé ${humanAttack} points de dégâts au monstre et le monstre a infligé ${monsterAttack} points de dégâts au Slayer.`;
    const historyList = document.getElementById('history');
    historyList.appendChild(newItem);
}

function resetGame() { 
    humanHealth = 100;
    monsterHealth = 100;

    humanStock.innerHTML = humanHealth;
    monsterStock.innerHTML = monsterHealth;
    
    document.getElementById("start").style.display = 'block';
    
    document.querySelector('.list').style.display = 'none';
    
    const historyList = document.getElementById('history');
    historyList.innerHTML = '';
}

function heal() {
    let healAmount = Math.floor(Math.random() * 10) + 5;
    let monsterAttack = Math.floor(Math.random() * 10) + 1;

    humanHealth -= monsterAttack;
    humanHealth += healAmount;
    
    if (humanHealth > 100) { // for capping the health to 100 when you heal
        humanHealth = 100;
    }

    humanStock.innerHTML = humanHealth;
    
    checkWin(humanHealth, monsterHealth);

    const newItem = document.createElement('li');
    newItem.textContent = `le monstre a infligé ${monsterAttack} points de dégâts au Slayer, mais le Slayer a récupéré ${healAmount} point de vie !`;
    const historyList = document.getElementById('history');
    historyList.appendChild(newItem);
}

function specialAttack() {
    let humanAttack = Math.floor(Math.random() * 10) + 6;
    let monsterAttack = Math.floor(Math.random() * 10) + 1;

    humanHealth -= monsterAttack;
    monsterHealth -= humanAttack;

    humanStock.innerHTML = humanHealth;
    monsterStock.innerHTML = monsterHealth;

    checkWin(humanHealth, monsterHealth);
    addHistory(humanAttack, monsterAttack);
}