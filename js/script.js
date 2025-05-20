let humanStock = document.getElementById("humanStock");
let monsterStock = document.getElementById("monsterStock");
let humanHealth = 100;
let monsterHealth = 100;

humanStock.innerHTML = humanHealth;
monsterStock.innerHTML = monsterHealth;

document.getElementById("start").addEventListener("click", function() {
    this.remove();
    document.querySelector('.list').style.removeProperty('display');
});



function humanAttack() {
    let humanDamage = Math.floor(Math.random() * 10) + 1;
    let monsterDamage = Math.floor(Math.random() * 10) + 1;

    monsterHealth -= humanDamage;
    humanHealth -= monsterDamage;

    humanStock.innerHTML = humanHealth;
    monsterStock.innerHTML = monsterHealth;

    checkWin();
}

function checkWin() {
    if (humanStock <= 0) {
        alert("Le monstre a gagné");
    }
    if (monsterStock <= 0) {
        alert("Le chasseur a gagné");
    }
  }