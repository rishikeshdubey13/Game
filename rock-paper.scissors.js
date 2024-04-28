let scores = JSON.parse(localStorage.getItem('scores')) || {
    Wins: 0,
    Lost: 0,
    Ties: 0
}


updatescore();

function PickcomputerMove() {

let computerMove = ''
const randomNumber = Math.random();

if (randomNumber >=0 && randomNumber <1/3) {
    computerMove = 'Rock';
}

else if(randomNumber >= 1/3 && randomNumber <1/2) {
    computerMove = 'Paper';
}

else if(randomNumber >= 1/2 && randomNumber<1) {
    computerMove = 'Scissors';
}

return computerMove;        
}

document.body.addEventListener('keydown', (event) => {
if (event.key === 'a' || event.key === 'A') {
    autoplay();
}
});


document.querySelector(".js-autoplay").
addEventListener('click', () => {
    autoplay();
});

let isplaying = false;
let IntervalId;

function autoplay(){
if(!isplaying){
    document.querySelector('.js-autoplay').innerHTML = 'Stop autoplay';
    IntervalId = setInterval(function(){
    const playerMove = PickcomputerMove();
    playGame(playerMove);
},1000)
isplaying =true;
}
else {
    clearInterval(IntervalId);
    isplaying = false;
    document.querySelector('.js-autoplay').innerHTML = 'Auto play';
}


}
document.querySelector('.js-rock-button').
addEventListener('click', () => {
playGame('Rock');
});


document.querySelector('.js-paper-button').
addEventListener('click', () => {
playGame('Paper');
});

document.querySelector('.js-scsissors-button').
addEventListener('click', () => {
playGame('Scissors');
});


document.body.addEventListener('keydown', (event) => {
if (event.key === 'r' || event.key === 'R') {
    playGame('Rock');
}
else if(event.key === 'p' || event.key === 'P') {
    playGame('Paper');
}
else if(event.key === 's' || event.key === 'S') {
    playGame('Scissors');
}
});
// document.body.addEventListener('keydown',(event) => {
//     console.log('key pressed', event.key);
// })

function playGame(playerMove){
let result = ''
const computerMove = PickcomputerMove();
if (playerMove === 'Rock'){
    if(computerMove === 'Rock') {
        result = 'Tie';
    }
    else if (computerMove === 'Paper') {
        result = 'Lost'
    }
    else if(computerMove === 'Scissors') {
        result = 'Win'
    }
}

else if (playerMove === 'Paper'){
    if(computerMove === 'Rock') {
        result = 'Win';
    }
    else if (computerMove === 'Paper') {
        result = 'Tie'
    }
    else if(computerMove === 'Scissors') {
        result = 'Lost'
    }
}

else if (playerMove === 'Scissors'){
    if(computerMove === 'Rock') {
        result = 'Lost'
    }
    else if (computerMove === 'Paper') {
        result = 'Win'
    }
    else if(computerMove === 'Scissors') {
        result = 'Tie'
    }
}

document.querySelector('.js-result').innerHTML = `You ${result}`

document.querySelector('.js-moves').innerHTML  = `Player's move: <img src = "${playerMove}-emoji.png"class = "button-icon">   Computer's move: <img src = "${computerMove}-emoji.png"class = "button-icon">`

if(result === 'Win'){
    scores.Wins += 1;
}
else if(result ==='Lost'){
    scores.Lost += 1;
}
else if(result = 'Tie'){
    scores.Ties += 1;
}


localStorage.setItem('scores', JSON.stringify(scores));

updatescore();

//         alert(`Player's move: ${playerMove}, Computer's move: ${computerMove},  Result: ${result} 
// Wins: ${scores.Wins}  Lost:${scores.Lost} Tied:${scores.Ties}`)
}


document.querySelector('.button-reset').addEventListener('click', () => 

{
    scores.Wins = 0;
    scores.Lost = 0;
    scores.Ties = 0;
    localStorage.removeItem('scores');
    updatescore();
});

function updatescore() {
document.querySelector('.js-score').innerHTML = `Won: ${scores.Wins}  Lost:${scores.Lost} Tied:${scores.Ties}`   
}