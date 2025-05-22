"use strict";

let humanHealth = 100;
let monsterHealth = 100;

document.getElementById("start").addEventListener("click", function() {
    this.style.display = 'none';
    startGame();
});

const humanStock = document.getElementById('humanStock');
const monsterStock = document.getElementById('monsterStock');
const humanStockNumber = document.getElementById('humanStockNumber');
const monsterStockNumber = document.getElementById('monsterStockNumber');

function startGame() {
    document.querySelector('.list').style.removeProperty('display');
}

function attack() {
    let humanAttack = Math.floor(Math.random() * 10) + 2;
    let monsterAttack = Math.floor(Math.random() * 10) + 1;

    humanHealth -= monsterAttack;
    monsterHealth -= humanAttack;

    updateHealthBars();

    addHistory(humanAttack, monsterAttack);
    checkWin(humanHealth, monsterHealth);
}

function updateHealthBars() {
    humanStockNumber.textContent = humanHealth;
    monsterStockNumber.textContent = monsterHealth;

    humanStock.style.width = humanHealth + '%';
    monsterStock.style.width = monsterHealth + '%';
    
    if (humanHealth > 60) {
        humanStock.style.backgroundColor = '#4caf50';
    } else if (humanHealth > 30) {
        humanStock.style.backgroundColor = '#ff9800';
    } else {
        humanStock.style.backgroundColor = '#f44336';
    }
    
    if (monsterHealth > 60) {
        monsterStock.style.backgroundColor = '#4caf50';
    } else if (monsterHealth > 30) {
        monsterStock.style.backgroundColor = '#ff9800';
    } else {
        monsterStock.style.backgroundColor = '#f44336';
    }
}

updateHealthBars();


function checkWin(humanHealth, monsterHealth) {
    if (humanHealth <= 0) {
        alert("The monstre won");
        resetGame();
    }
    if (monsterHealth <= 0) {
        alert("The Slayer won");
        resetGame();
    }
}

function flee() {
    document.querySelector('.list').style.display = 'none';
    document.getElementById("start").style.display = 'block';
    alert("Slayer had to flee !");
    resetGame();
}

function addHistory(humanAttack, monsterAttack, actionType = 'attack') {
    const newItem = document.createElement('li');
    
    if (actionType === 'heal') {
        newItem.textContent = `The monster dealt ${monsterAttack} to the Slayer, but the Slayer healed for ${humanAttack} health point.`;
    } else {
        newItem.textContent = `Slayer dealt ${humanAttack} damage to the monster, but the monster dealt ${monsterAttack} damage to the Slayer.`;
    }
    
    const historyList = document.getElementById('history');

    // to add the the top instead of the bottom of the history list
    if (historyList.firstChild) {
        historyList.insertBefore(newItem, historyList.firstChild);
    } else {
        historyList.append(newItem);
    }
    // Add a max length to display maximum 8 li
    if (historyList.children.length > 8) {
        historyList.removeChild(historyList.lastChild);
    }
}


function resetGame() { 
    humanHealth = 100;
    monsterHealth = 100;

    updateHealthBars();
    
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
    
    if (humanHealth > 100) {
        humanHealth = 100;
    }

    updateHealthBars();
    
    checkWin(humanHealth, monsterHealth);

    addHistory(healAmount, monsterAttack, 'heal');
}

function specialAttack() {
    let humanAttack = Math.floor(Math.random() * 10) + 6;
    let monsterAttack = Math.floor(Math.random() * 10) + 1;

    humanHealth -= monsterAttack;
    monsterHealth -= humanAttack;

    updateHealthBars();

    addHistory(humanAttack, monsterAttack);
    checkWin(humanHealth, monsterHealth);
}
