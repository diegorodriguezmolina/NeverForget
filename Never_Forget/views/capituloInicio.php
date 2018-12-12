<?php include "../templates/masterGames.php" ?>

<?php startblock('titulo') ?>
    <title>Capitulo 1</title>
    <?php endblock() ?>


<?php startblock('principal') ?>


<div class="text-center">

<button type="button" class="btn-lg btn-danger mb-5" id="botonLearnMore" data-toggle="modal" data-target="#modalPage">
    LEARN MORE
</div>

<!-- Modal -->
<div class="modal right fade" id="modalPage" tabindex="-1" role="dialog" aria-labelledby="modalPageLabel2">
<div class="modal-dialog modal-lg" role="document" style= "width:600px;"> 
    <div class="modal-content">

        <div class="modal-header ">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="modalPageLabel2"></h4>
        </div>   

        <div class="modal-body">
        <!--IMAGEN DE PÁGINA DE LIBRO-->
        <p>Start of the journey: C/ Denia

January 16, 1938, 08:00 h, Barcelona

Just like every morning, Lluís leaves his home in the neighborhood of Gràcia to go to work at the factory on carrer de Dénia. The factory, previously devoted to the production of lipstick, is now controlled by the War Industries Board and manufactures ammunition to support the Republican faction. 
Due to chronic knee pain, Lluís is unable to go to the front. Working at the factory is his small contribution to the defense of his city and people.

January 16, 1938, 22:00 h, Barcelona

Back home after an exhausting day. Whatever it takes to help fight those damn fascists, though. Things don’t look good for us. Who knows how much longer we can hold out.

Suddenly, the silence of the night is shattered by a large blast as bombs once again rain down on the city.

God damn it! More bombs! I’m too far from home. I have to find some place to take cover until it’s over. I think there was a shelter around here somewhere…
</p>
         
        </div>

    </div><!-- modal-content -->
</div><!-- modal-dialog -->
</div><!-- modal -->
</div><!-- container -->

<div class="container">
   <div class="card mt-5 bg-transparent">
        <div class="card-header bg-transparent text-center">
        </div>

        <div class="row no-gutters">
            <div class="col-sm-6 mt-5">
                <div class="card-block px-2">
                <h1 class="colorSecundario titulo">Enero de 1938</h1>
                <p id="pHistoria" class="text-white fuente">Barcelona, the neighborhood of Gracia. As usual, 
                Lluís heads home after a long day of work at the factory, 
                where he helps the Republicans make ammunition.
                Suddenly, the silence of the night is shattered by a large blast:
                another air strike. Lluís must find some place to take shelter. </p>
                
                </div>
            </div>
            
            <div class="col-sm-6 mt-5">
                <img src="../assets/img/barcelona.jpg" class="img-fluid" id="imgDifuminada">
            </div>

            <div class="col-sm-12 mt-5 text-center">
            <a href="games/game1.php" class="btn-lg btn-success mb-5">IR A PLAÇA DEL DIAMANT</a>
            </div>
        </div>          
</div>





<?php endblock() ?>