cards = document.querySelectorAll('.memory-card');

var hasFlippedCard = false;
var lockBoard = false; // Evitar que se pueda clickar en una 3a carta antes que se den la vuelta las 2 primeras
var firstCard, secondCard;
//var buttonTryAgain=document.getElementById('tryAgain');
var count = 0; // Contador para controlar cuando todas las cartas estan descubiertas




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

//is a match?
if(firstCard.dataset.images === secondCard.dataset.images){
  //YES, match!
  count++;
disableCards();

}else{
  //NO match!
unflipCards();
}

if(count==6){
  showMessage();
}

}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);//Callback
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
    var randomPos = Math.floor(Math.random() * 12); // generar numero aleatorio entre 0 y 11 y assignar cada numero a una carta
    card.style.order = randomPos;
  });
})(); //funcion entre parentesis para que sea ejecutada justo despues de su definicion


cards.forEach(card => card.addEventListener('click', flipCard));



function showMessage(){
$('#done').modal();
}


document.getElementById("tryAgain").onclick = function() {

window.location.reload();

};
 //Funcion para que el botón vuelva a recargar la pagina (volver a jugar)


