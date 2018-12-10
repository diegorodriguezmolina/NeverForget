<?php include "../../templates/masterGames.php" ?>

<?php startblock('head') ?>  
  
<title>Memory Game</title>

<link rel="stylesheet" type="text/css" href="/NeverForget/Never_Forget/Styles/games/game2.css">
<link rel="stylesheet" type="text/css" href="/NeverForget/Never_Forget/css/bootstrap.min.css">

<script type="text/javascript" src="../../scripts/games/game2/game2.js"></script>

<?php endblock() ?>

<?php startblock('principal') ?>



<div class="container">
     <div class="center">
     <h1>Memory Game</h1>
     </div>
  
  
  <section class="memory-game">

      <div class="memory-card" data-images="bomb">
        <img class="front-face" src="../../assets/img/game2/bomb.jpg" alt="Bomb" />
        <img class="back-face" src="../../assets/img/game2/backcard.jpg" alt="backcard" />
      </div>
      <div class="memory-card" data-images="bomb">
        <img class="front-face" src="../../assets/img/game2/bomb.jpg" alt="Bomb" />
        <img class="back-face" src="../../assets/img/game2/backcard.jpg" alt="backcard" />
      </div>

      <div class="memory-card" data-images="flag">
        <img class="front-face" src="../../assets/img/game2/flag.jpg" alt="Flag" />
        <img class="back-face" src="../../assets/img/game2/backcard.jpg" alt="backcard" />
      </div>
      <div class="memory-card" data-images="flag">
        <img class="front-face" src="../../assets/img/game2/flag.jpg" alt="Flag" />
        <img class="back-face" src="../../assets/img/game2/backcard.jpg" alt="backcard" />
      </div>

      <div class="memory-card" data-images="helmet">
        <img class="front-face" src="../../assets/img/game2/helmet.jpg" alt="Helmet" />
        <img class="back-face" src="../../assets/img/game2/backcard.jpg" alt="backcard" />
      </div>
      <div class="memory-card" data-images="helmet">
        <img class="front-face" src="../../assets/img/game2/helmet.jpg" alt="Helmet" />
        <img class="back-face" src="../../assets/img/game2/backcard.jpg" alt="backcard" />
      </div>

      <div class="memory-card" data-images="warship">
        <img class="front-face" src="../../assets/img/game2/warship.jpg" alt="Warship" />
        <img class="back-face" src="../../assets/img/game2/backcard.jpg" alt="backcard" />
      </div>
      <div class="memory-card" data-images="warship">
        <img class="front-face" src="../../assets/img/game2/warship.jpg" alt="Warship" />
        <img class="back-face" src="../../assets/img/game2/backcard.jpg" alt="backcard" />
      </div>

      <div class="memory-card" data-images="plane">
        <img class="front-face" src="../../assets/img/game2/plane.jpg" alt="Plane" />
        <img class="back-face" src="../../assets/img/game2/backcard.jpg" alt="backcard" />
      </div>
      <div class="memory-card" data-images="plane">
        <img class="front-face" src="../../assets/img/game2/plane.jpg" alt="Plane" />
        <img class="back-face" src="../../assets/img/game2/backcard.jpg" alt="backcard" />
      </div>

      <div class="memory-card" data-images="tank">
        <img class="front-face" src="../../assets/img/game2/tank.png" alt="Tank" />
        <img class="back-face" src="../../assets/img/game2/backcard.jpg" alt="backcard" />
      </div>
      <div class="memory-card" data-images="tank">
        <img class="front-face" src="../../assets/img/game2/tank.png" alt="Tank" />
        <img class="back-face" src="../../assets/img/game2/backcard.jpg" alt="backcard" />
      </div>
      
  </section>

    <div class="center">
    <button type="button" class="btn btn-danger button" id="tryAgain" >TRY AGAIN</button>
   </div>

  </div>

  <div class="modal" tabindex="-1" role="dialog" id="done">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">You Win!</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-dark">Continue the Adventure</button>
      </div>
    </div>
  </div>
</div>





<?php endblock() ?>