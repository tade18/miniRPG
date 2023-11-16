const hp1 = document.getElementById("hp1");
const hp2 = document.getElementById("hp2");
const attack = document.getElementById("attack");
const audio = new Audio('/res/audio/audio.mp3');
const info = document.getElementById("info");
let health2 = document.getElementById("health2");
let health1 = document.getElementById("health1");
const dmg1 = document.getElementById("dmg1");
const dmg2 = document.getElementById("dmg2");

let hpPO = 1000;
let hpPT = 1000;

let pTwoAttack

let dmgO = 14;
let dmgT = 13;


audio.play()
attack.onclick = () => {
    if(hpPT >= 0){
    console.log("P1: útok");
    hpPT -= dmgO;
    health2.value -= dmgO;
    hp2.innerText="Health:" +hpPT;
    if (hpPT<=0){
    console.log("P1: vyhrává souboj")
    info.innerText="Status: Kitty vyhrává souboj!";
    info.style.color="green";
    }
    }
}
if(hpPO >= 0){
    clearInterval(pTwoAttack);
    pTwoAttack = setInterval(()=>{
        hpPO -= dmgT;
        health1.value -= dmgT;
        hp1.innerText="Health:"+hpPO;
        if(hpPO <= 0){
            info.innerText="Status: Slovák vyhrává souboj!";
            info.style.color="red";
            clearInterval(pTwoAttack);
        }
        },1000)
}