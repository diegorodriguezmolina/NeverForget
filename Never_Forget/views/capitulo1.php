<?php include "../templates/masterGames.php" ?>

<?php startblock('titulo') ?>
    <title>Capitulo 1</title>
    <?php endblock() ?>


<?php startblock('principal') ?>

<div class="container">
   <div class="card mt-5 bg-transparent">
        <div class="card-header bg-transparent mt-5">
            <h1 class="colorSecundario titulo text-center">Enero de 1938</h1>
        </div>

        <div class="row no-gutters">
            <div class="col-sm-6 mt-5">
                <div class="card-block px-2">
                <p id="pHistoria" class="text-white fuente">Enero 1938 - 22:00 </p>
                <p id="pHistoria" class="text-white fuente">Barrio de Gracia,  </p>
                <p id="pHistoria" class="text-white fuente">Lluís, vuelve a casa como todos los días después de una 
                larga jornada de trabajo en la fábrica donde ayuda a los republicamos haciendo munición. </p>
                <p id="pHistoria" class="text-white fuente">De repente, el silencio de la noche se ve interrumpido 
                por un fuerte estruendo, otro bombardeo, Lluís debe buscar dónde refugiarse. </p>
                </div>
            </div>
            
            <div class="col-sm-6 mt-5">
                <img src="../assets/img/barcelona.jpg" class="img-fluid" id="imgDifuminada">
            </div>

            <div class="col-sm-12 mt-5 text-center">
                <button type="button" class="btn-lg btn-danger" href="index.php">BUSCAR</button>
            </div>
        </div>          
</div>

<?php endblock() ?>


