import { grid, modifyp1, modifyp2, Winner, player1, player2, winner } from "./var";

const wins = [[1, 2, 3], [4, 5, 6], [7, 8, 9], 
             [1, 4, 7], [2, 5, 8], [3, 6, 9], 
             [1, 5, 9], [3, 5, 7]];

var modal = document.getElementById("myModal");

export function checkWin () {
    for (let win of wins) {
      let p1 = document.getElementById(`g${win[0]}`).textContent;
      let p2 = document.getElementById(`g${win[1]}`).textContent;
      let p3 = document.getElementById(`g${win[2]}`).textContent;
  
      if( (p1 !== '' && p2 !== '' && p3 !== '' ) && (p1 === p2 && p2 === p3) ){
        addPoint(p1);
      } else {
  
      }
    }
  }

export function checkFull() {
    let counter = 0;
    for (let point of grid) {
      let full = document.getElementById(`g${point}`).textContent;
      if(full === 'X' || full === 'O'){
        counter += 1;
      }
      if (counter === 9 && winner === false ) {
        const winner = document.getElementById('winner');
        winner.style = "color: grey";
        winner.innerHTML = "DRAW";
        openModal();
      }
    }
}

function addPoint (Marked) {
    if (Marked === 'X') {
      document.getElementById('p1Points').innerHTML = modifyp1(1);
      document.getElementById('winner').innerHTML = `${player1} WINS`;
    } else {
      document.getElementById('p2Points').innerHTML = modifyp2(2);
      document.getElementById('winner').innerHTML = `${player2} WINS`;
    }
    openModal();
    Winner(true)
  }

function openModal() {
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";

    document.body.addEventListener('click', () => {
      modal.style.display = "none";
    })
  }
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  