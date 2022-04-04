'use strick'

const arr = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

const btn = document.getElementById('btn');
const bg = document.querySelector("body");
const spn = document.querySelector('span');

btn.addEventListener("click" , generateColor);

function generateColor(){
    var color = "";
    for(i=0 ; i<6 ; i++){
        color += arr[Math.floor(Math.random()*arr.length)];
    }
    bg.style.backgroundColor = "#"+color;
    spn.innerHTML = "#"+color;
}