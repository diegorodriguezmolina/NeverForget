<?php include "../templates/masterGames.php" ?>

<?php startblock('titulo') ?>
    <title>Capitulo 1</title>
    <?php endblock() ?>


<?php startblock('principal') ?>



<div class="text-center">



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
        <p>
        Location: Plaça del Diamant Shelter

Lluís went to the Plaça del Diamant shelter to wait for the bombs to stop before going home. But they didn’t stop, not for three days. It was the worst attack waged on Barcelona at the time.
A total of 45,000 kg of bombs was dropped on the city by the fascist Italian air fleet. They left 551 dead and 1,151 wounded, in addition to completely destroying 76 buildings and seriously damaging around a hundred more.


January 19, 1938

I need to go home. I hope Pau is OK. He should be home by now. 

Pau, Lluís’ only son, is 16 years old and goes to school close to his home in Gràcia. Laia, Pau’s mother, died in childbirth. That was a hard blow for Lluís, but when he looks at his son, he knows he has to carry on for him and for Laia. “Your mother would be proud of us, Pau.”
Upon arriving home, Lluís went pale. The building he lived in had been entirely destroyed by the bombs. His home of 30 years was now a pile of debris. 

Oh my god, Pau! My son! No! He has to be here, I’m sure he got out in time...

Lluís checks all the shelters in the neighborhood and shows everyone the photo of Pau he carries in his wallet. Nobody has seen him. Feeling truly desperate now, Lluís heads back to what’s left of his home and searches through the wreckage. He has no luck, though; there’s not a trace of Pau to be found.
The days go by and there’s still no sign of his son. Lluís fears the worst. 
Then, his grief becomes rage, a rage so strong that he climbs Turó de la Rovira and signs up as a volunteer for...

</p>
         
        </div>

    </div><!-- modal-content -->
</div><!-- modal-dialog -->
</div><!-- modal -->
</div><!-- container -->

<div class="container">
   <div class="card mt-5 bg-transparent">
        <div class="card-header bg-transparent mt-5">
        </div>

        <div class="row no-gutters">
            <div class="col-sm-6 mt-5">
                <div class="card-block px-2">
                <h1 class="colorSecundario titulo">Enero de 1938</h1>
                <p id="pHistoria" class="text-white fuente">The city is destroyed after the attack. 
                Lluís goes home hoping to find his son, Pau, but there is no trace of him. 
                He searches long and hard, but the boy hasn’t shown up. Lluís decides it’s 
                time to take action.</p>
                
                </div>
            </div>
            
            <div class="col-sm-6 mt-5">
                <img src="../assets/img/barcelona.jpg" class="img-fluid" id="imgDifuminada">
            </div>

            <div class="col-sm-12 mt-5 text-center">         
            <button type="button" class="btn-lg btn-danger mb-5" id="botonLearnMore" data-toggle="modal" data-target="#modalPage">LEARN MORE
            <a class="btn-lg btn-success mb-5 text-white">IR A BUNKERS DEL CARMEL</a>
</div>
            <!-- MODAL CON LA CONTRASEÑA PARA EL SIGUIENTE Y LOGOUT AL CLICKAR MODAL -->
            </div>
        </div>          
</div>

<?php endblock() ?>


