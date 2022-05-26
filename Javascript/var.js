export const grid = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export let Player1 = 0;
export let Player2 = 0;

export let winner = false;

export let player1 = "";
export let player2 = "";

export function modifyp1(val) { 
    if (!val){
        Player1 = 0;
    } else { 
    Player1 += 1;
    } 
    return Player1;
}

export function modifyp2(val) {     
    if (!val){
    Player2 = 0;
} else { 
    Player2 += 1;
    } 
    return Player2;
} 

export function Winner(val) {
    winner = val;
}

export function nameP1(val) {
    player1 = val;
}

export function nameP2(val) {
    player2 = val;
}