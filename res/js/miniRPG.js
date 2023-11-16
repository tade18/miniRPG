const hp1 = document.getElementById("hp1");
const hp2 = document.getElementById("hp2");
const attack = document.getElementById("attack");
const audio = new Audio('../audio/audio.mp3');
const sword_sound = new Audio('../audio/sword_sound.mp3');
const info = document.getElementById("info");
let health2 = document.getElementById("health2");
let health1 = document.getElementById("health1");
const dmg1 = document.getElementById("dmg1");
const dmg2 = document.getElementById("dmg2");
const startButton = document.getElementById("StartButton");
//schová element
const hideElement = (element) => {
    element.style.display = "none";
}
//zobrazit element v původním stavu
const showElement = (element) => {
    element.style.display = "initial"
}
//životy
let hpPO = 1000;
let hpPT = 1000;
//attack protivníka
let pTwoAttack
//damage
let dmgO = 6;
let dmgT = 12;



hideElement(attack)
//zahájení hry
startButton.onclick = () => {
    audio.play();
    hideElement(startButton);
    showElement(attack);
    if(hpPO >= 0){
    clearInterval(pTwoAttack);
    pTwoAttack = setInterval(()=>{
        console.log("P2: útok")
        hpPO -= dmgT;
        health1.value -= dmgT;
        hp1.innerText="Health:"+hpPO;
        if(hpPO <= 0){
            console.log("P2: vyhrává souboj")
            info.innerText="Status: Slovák vyhrává souboj!";
            info.style.color="red";
            clearInterval(pTwoAttack);
            hideElement(attack);
        }
        },750)
    }
}

attack.onclick = () => {
    if(hpPT >= 0){
    console.log("P1: útok");
    hpPT -= dmgO;
    health2.value -= dmgO;
    hp2.innerText="Health:" +hpPT;
    sword_sound.play();
    if (hpPT<=0){
    console.log("P1: vyhrává souboj")
    info.innerText="Status: Kitty vyhrává souboj!";
    clearInterval(pTwoAttack);
    hideElement(attack);
    info.style.color="green";
    }
    }
}
