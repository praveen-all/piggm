let score1 = document.getElementById("score--0");
let score2 = document.getElementById("score--1");
// first fixing scores to zero
score1.textContent = 0;
score2.textContent = 0;
let playing = true;
let current1 = document.getElementById("current1");
let current2 = document.getElementById("current2");
// current2.innerText=0;
// console.log(score1, score2, current1, current2);
let roll = document.querySelector(".roll");

let new1 = document.querySelector(".new");
let hold = document.querySelector(".hold");
let diceImage = document.querySelector(".dice");

// first we are hidden the img
diceImage.classList.add("heddin");

let currentscore = 0;
let activeplayer = 1;

// creating randome number and rolling dice
roll.addEventListener("click", function () {
  if (playing) {
    let random = Math.trunc(1 + Math.random() * 6);
    //   score1.textContent = random;
    diceImage.src = `dice-${random}.png`;
    diceImage.classList.remove("heddin");
    if (random !== 1) {
      currentscore += random;
      // current1.textContent=currentscore;//leter might be change
      document.getElementById(`current${activeplayer}`).textContent =
        currentscore;
    } else {
      kiang();
    }
  }
});

hold.addEventListener("click", function (e) {
  if (playing) {
    document.getElementById(`score--${activeplayer - 1}`).textContent =
      Number(
        document.getElementById(`score--${activeplayer - 1}`).textContent
      ) + currentscore;
    if (
      document.getElementById(`score--${activeplayer - 1}`).textContent >= 100
    ) {
      playing = false;
      document.getElementById(`player${activeplayer}`).classList.add("winner");
      funct();
    } else {
      kiang();
    }
  }
});

function kiang() {
  currentscore = 0;
  document.getElementById(`player${activeplayer}`).classList.remove("player--");
  document.getElementById(`current${activeplayer}`).textContent = 0;
  activeplayer = activeplayer === 1 ? 2 : 1;
  document.getElementById(`player${activeplayer}`).classList.add("player--");
}

let win = document.querySelector(".win");

function funct() {
  win.innerText = `player${activeplayer} win`;
  win.style.display = "flex";
}

document.querySelector(".new").addEventListener("click", function () {
  document.getElementById(`player${activeplayer}`).classList.remove("player--");
  document.getElementById(`player1`).classList.add("player--");
  document.getElementById(`player${activeplayer}`).classList.remove("winner");
  win.style.display = "none";

  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  playing = true;
  currentscore = 0;
  activeplayer = 1;
});
