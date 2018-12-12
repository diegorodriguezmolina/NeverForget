//FUNCION CON LAS VARIABLES
function inicialize(){

cards = document.querySelectorAll('.memory-card'); // Devuelvo el primer elemento que coincide con ".memory.card"

hasFlippedCard = false;
lockBoard = false; // Evitar que se pueda clickar en una 3a carta antes que se den la vuelta las 2 primeras
firstCard = null;
secondCard= null;

countCards = 0; // Contador para controlar cuando todas las cartas estan descubiertas

 // Botón recarga la pagina (volver a jugar)
document.getElementById("tryAgain").onclick = function() {

window.location.reload();
  
  };

//Botón recarga la pagina CUANDO USER SE QUEDA SIN TIEMPO
document.getElementById("tryAgain2").onclick = function() {
  
window.location.reload();
    
    };

}

// FUNCION PRINCIPAL

function game(){

  countDown();

  //FUNCION GIRAR CARTA

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


//Funcion para comparar si 1a y 2a carta son iguales
function checkForMatch() {

//is a match?
if(firstCard.dataset.images === secondCard.dataset.images){
  //YES, match!
  countCards++;
disableCards();

}else{
  //NO match!
unflipCards();
}

if(countCards==6){
  showMessage();
}

}


//Cuano acierto dos cartas--> desactivo el evento click de las cartas y la opcion de darles la vuelta
function disableCards() {
  firstCard.removeEventListener('click', flipCard);//Callback
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

//Si no coinciden--> les doy la vuelta
function unflipCards() {
  lockBoard = true; //Si no hay match, hasta que la pareja no se vuelve a dar la vuelta, no dejo clickar a otra carta

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);//tiempo en darles la vuelta
}

//despues de cada par de clicks--> reseteo las variables
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// Para mezclar orden imagenes--> generar numero aleatorio entre 0 y 11 y assignar cada numero a una carta-->assignar el numero cada vez Aleatoriamente
function shuffle() {
  cards.forEach(card => {
    var randomPos = Math.floor(Math.random() * 12); 
    card.style.order = randomPos;
  });
};
shuffle(); 


cards.forEach(card => card.addEventListener('click', flipCard));



function showMessage(){
$('#done').modal();

}

//Cuenta Atràs

function countDown(){

  var count=60;
  var num = document.getElementById('number');
  var interval = setInterval(function(){
    count--;
    num.innerHTML=count+'"';
    if(count==0){
      clearInterval(interval);
      $('#clock').modal();
    }
    if(countCards==6){
      clearInterval(interval);
    }
     document.getElementById("buttonStart").disabled=true;

  },1000);

}
}
