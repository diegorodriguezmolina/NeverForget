<?php include "../../templates/masterGames.php" ?>

<?php startblock('head') ?>
    <link rel="stylesheet" href="../../Styles/games/game4.css">
    <title>Capitulo 1</title>
    <script src="../../scripts/games/game4/puzzle.js"></script>
<?php endblock() ?> 


<?php startblock('principal') ?>

    <div class="container mt-5">
        <div class="row">
            <div id="cell11" class="cell1" onclick="changeTile(1,1)"></div>
            <div id="cell12" class="cell2" onclick="changeTile(1,2)"></div>
            <div id="cell13" class="cell3" onclick="changeTile(1,3)"></div>
        </div>
        <div class="row">
            <div id="cell21" class="cell4" onclick="changeTile(2,1)"></div>
            <div id="cell22" class="cell5" onclick="changeTile(2,2)"></div>
            <div id="cell23" class="cell6" onclick="changeTile(2,3)"></div>
        </div>
        <div class="row">
            <div id="cell31" class="cell7" onclick="changeTile(3,1)"></div>
            <div id="cell32" class="cell8" onclick="changeTile(3,2)"></div>
            <div id="cell33" class="cell9" onclick="changeTile(3,3)"></div>
        </div>
        <button type="button" onclick="shuffle()">SHUFFLE</button>
    </div>
    


<?php endblock() ?>


