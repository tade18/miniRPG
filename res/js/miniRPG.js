const hp1 = document.getElementById("hp1");
const hp2 = document.getElementById("hp2");
const attack = document.getElementById("attack");

const info = document.getElementById("info");

let health = document.getElementById("health");



const dmg1 = document.getElementById("dmg1");
const dmg2 = document.getElementById("dmg2");

let hpPO = 1000;
let hpPT = 1000;

let dmgO = 14;
let dmgT = 13;

attack.onclick = () => {
    if(hpPT >= 0){
    console.log("P1: útok");
    hpPT -= dmgO;
    health.value -= dmgO;
    hp2.innerText="Health:" +hpPT;
    if (hpPT<=0){
    console.log("P1: vyhrává souboj")
    info.innerText="Status: Kitty vyhrává...";
    info.style.color="green";
    }
    }
}
