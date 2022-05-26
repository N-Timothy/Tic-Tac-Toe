import '../css/style.css'

import {checkFull, checkWin} from './rules.js'
import { grid, modifyp1, modifyp2, winner, Winner, player1, player2, nameP1, nameP2 } from "./var";

let p1 = true;

let XCOLOR = "color: #ffff00";
let OCOLOR = "color: #ffffff";

function putMark (gridNum) {
  let marked = document.getElementById(`g${gridNum}`).textContent;
  if(marked !== 'X' && marked !== 'O' && !winner) {
    if(p1) {
      document.getElementById(`g${gridNum}`).style = XCOLOR;
      document.getElementById(`g${gridNum}`).innerHTML = 'X';
      document.getElementById('Turns').innerHTML = player2;
      p1 = false;
    } else {
      document.getElementById(`g${gridNum}`).style = OCOLOR;
      document.getElementById(`g${gridNum}`).innerHTML = "O";
      document.getElementById('Turns').innerHTML = player1;
      p1 = true; 
    }
    checkWin(gridNum);
    checkFull();
  }
}

function reset() {
  for (let num of grid) {
    document.getElementById(`g${num}`).innerHTML = "";
  }
  p1 = true;
  document.getElementById('Turns').innerHTML = player1;
  document.getElementById('winner').innerHTML = "";
  Winner(false);
  document.getElementById('winner').style = "color: red";
}

function markColor () {
  const X = document.getElementById('xColor');
  const O = document.getElementById('yColor');

  X.addEventListener('change', () => {
    XCOLOR = `color: ${X.value}`;
    document.getElementById('X').style = XCOLOR;
  })

  O.addEventListener('change', () => {
    OCOLOR = `color: ${O.value}`;
    document.getElementById('O').style = OCOLOR;
  })
}

function back() {
  document.getElementById('back').addEventListener('click', () => {
    reset();

    modifyp1(0);
    modifyp2(0);

    document.getElementById('p1Points').innerHTML = modifyp1(0);
    document.getElementById('p2Points').innerHTML = modifyp2(0);
    document.getElementById('p1Name').value =  "";
    document.getElementById('p2Name').value =  "";

    document.getElementById("home").style = 'display: inherit';
    document.getElementById("app").style = 'display: none';
  })
}

function getPlayerName() {

  document.getElementById('nameForm').addEventListener("submit", () => {
    nameP1(document.getElementById('p1Name').value);
    nameP2(document.getElementById('p2Name').value);  
    
    document.getElementById('Turns').innerHTML = player1;
    document.getElementById('p1').innerHTML = player1 + '.';
    document.getElementById('p2').innerHTML = player2 + '.';
  })
}

function play () {

  for (let num of grid) {
    document.getElementById(`g${num}`).addEventListener('click', () => putMark(num) );
  }
  document.getElementById('Reset').addEventListener('click', () => reset() );
}

play();
getPlayerName();
markColor();
back();