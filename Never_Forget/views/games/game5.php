<?php include "../../templates/masterGames.php" ?>

    <?php startblock('head') ?>
        <title>Enigma 1: Castle of Montjuic</title>
        <link rel="stylesheet" href="../../Styles/games/game5.css">
        
    <?php endblock() ?>

<?php startblock('principal') ?>
    <div class="container">
    
    <h1 class="titulo">Hangman game</h1>
    <button class="btn btn-next" id="btnAyuda">i</button>
    
    <h1 id="msg-final">You are saved</h1>
    <h2 id="acierto"></h2>
    <div class="flex-row no-wrap">
        <h2 class="palabra" id="palabra"></h2>
        <picture>
        <img src="../../assets/img/game5_ahorcado_6.png" alt="" id="image6">
        <img src="../../assets/img/game5_ahorcado_5.png" alt="" id="image5">
        <img src="../../assets/img/game5_ahorcado_4.png" alt="" id="image4">
        <img src="../../assets/img/game5_ahorcado_3.png" alt="" id="image3">
        <img src="../../assets/img/game5_ahorcado_2.png" alt="" id="image2">
        <img src="../../assets/img/game5_ahorcado_1.png" alt="" id="image1">
        <img src="../../assets/img/game5_ahorcado_0.png" alt="" id="image0">
        </picture>
    </div>
    <div class="flex-row" id="turnos">
        <div class="col">
        <h3>Intentos restantes: <span id="intentos">6</span></h3>
        </div>
        <div class="col">
        <button id="continuar" style="display: none" class="btn btn-next">Continue</button>
        <button onclick="siguiente()" id="siguiente" class="btn btn-next">Next</button>
        <button onclick="pista()" id="pista" class="btn btn-outline-danger btn-pista">Dame una pista!</button>
        <span id="hueco-pista"></span>
        </div>
        </div>
    
    <div class="flex-row">
        <div class="col">
        <div class="flex-row" id="abcdario">
        </div>
        </div>
        <div class="col"></div>
    </div>

    </div>

    <!--Modal de ayuda-->
    <div class="modal" tabindex="-1" role="dialog" id="modalPista">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-warning">
                    <h5 class="modal-title">Consejo</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    
                </div>
            </div>
        </div>
    </div>

    <!--Modal de instrucciones-->
    <div class="modal" tabindex="-1" role="dialog" id="modalInstrucciones">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Juego del ahorcado</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>- Cuando completes la palabra pasa a la siguiente.</p>
                    <p>- Haz click sobre las letra para ir completando la palabra</p>
                    <p>- Cuando completes la palabra pasa a la siguiente.</p>
                </div>
            </div>
        </div>
    </div>
    
    <script src="../../scripts/games/game5/ahorcado.js"></script>
    <script src="../../scripts/games/game5/tiempo-pista.js"></script>
    
<?php endblock() ?>
  