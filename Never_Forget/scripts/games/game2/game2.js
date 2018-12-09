const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false; // Evitar que se pueda clickar en una 3a carta antes que se den la vuelta las 2 primeras
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;// Controlar el doble click en una carta

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true; //Si no hay match, hasta que la pareja no se vuelve a dar la vuelta, no dejo clickar a otra carta

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12); // generar numero aleatorio entre 0 y 11 y assignar cada numero a una carta
    card.style.order = randomPos;
  });
})(); //funcion entre parentesis para que sea invocada justo despues de su creacion


cards.forEach(card => card.addEventListener('click', flipCard));