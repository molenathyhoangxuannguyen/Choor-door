
// global variable declarations
const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const doorImage3 = document.getElementById('door4');
const doorImage3 = document.getElementById('door5');
const botDoorPath = 'https://github.com/molenathyhoangxuannguyen/Chore-Door-Game/blob/master/img/Bomb.png';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let numClosedDoors = 5;
let openDoor1;
let openDoor2;
let openDoor3;
let openDoor4;
let openDoor5;
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let startButton = document.getElementById('start');
let currentlyPlaying = true;

// function definitions
const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } 
  else {
    return false;
  }
};

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  }
  else {
    return true;
  }
};

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } 
  else if (isBot(door)) {
    	gameOver();
  }
};

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
    openDoor1 = spaceDoorPath;
           }
  else {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
};
 
// Click handlers
doorImage1.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage1)) {
  		doorImage1.src = openDoor1;
  		playDoor(doorImage1);
		}
};
 
doorImage2.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage2)) {
  		doorImage2.src = openDoor2;
  		playDoor(doorImage2);
    }
};

doorImage3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)) { 
  		doorImage3.src = openDoor3;
  		playDoor(doorImage3);
    }
};

startButton.onclick = () => {
  if (!currentlyPlaying) {
  	startRound();  
  }
};

function startRound() {
  numClosedDoors = 5;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  doorImage4.src = closedDoorPath;
  doorImage5.src = closedDoorPath;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};

function gameOver(status) {
  if (status === 'win') {
    startButton.innerHTML = 'You Win!<br>Play Again?';
  } 
  else {
    startButton.innerHTML = 'Game Over!<br>Play Again?'
  }
  currentlyPlaying = false;
};

startRound();

