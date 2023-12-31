const hp1 = document.getElementById("hp1");
const hp2 = document.getElementById("hp2");
const attack = document.getElementById("attack");
var audio = new Audio('../audio/back_music.mp3');
var sword_sound = new Audio('../audio/sword_sound.wav');
var sword_sound2 = new Audio('../audio/sword_sound2.mp3');
var death_sound = new Audio('../audio/end_sound.mp3')
const info = document.getElementById("info");
let health2 = document.getElementById("health2");
let health1 = document.getElementById("health1");
const dmg1 = document.getElementById("dmg1");
const dmg2 = document.getElementById("dmg2");
const startButton = document.getElementById("StartButton");
const player1Overview = document.getElementById("player1Overview");
const player2Overview = document.getElementById("player2Overview");



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
        sword_sound2.play();
        hpPO -= dmgT;
        health1.value -= dmgT;
        hp1.innerText="Health:   "+hpPO;
        if(hpPO <= 0){
            console.log("P2: vyhrává souboj")
            info.innerText="Status: Slovák vyhrává souboj!";
            death_sound.play();
            info.style.color="red";
            clearInterval(pTwoAttack);
            hideElement(attack);
        }
        },750)
    }
}

attack.onclick = () => {
    if(hpPT >= 0){
    console.log("P1: útok"+ dmgO);
    hpPT -= dmgO;
    health2.value -= dmgO;
    hideElement(attack);
    hp2.innerText="Health:   " +hpPT;
    sword_sound.play();
    setTimeout(() => {showElement(attack);}, 200)
    if (hpPT<=0){
    console.log("P1: vyhrává souboj")
    info.innerText="Status: Kitty vyhrává souboj!";
    death_sound.play();
    clearInterval(pTwoAttack);
    hideElement(attack);
    info.style.color="green";
    }
    }
}
