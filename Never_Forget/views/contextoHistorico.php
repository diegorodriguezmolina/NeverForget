<?php include "../templates/master.php" ?>

    <?php startblock('head') ?>
     <title>Contexto histórico</title>
    <?php endblock() ?>

<?php startblock('principal') ?>
<link rel="stylesheet" href="../Styles/Tindex.css">
<div class="container-fluid">
   <div class="card mt-5 bg-transparent">
        <div class="card-header mt-5">
            <h1 class="colorSecundario titulo ">Enero de 1938</h1>
            <button type="button" class="btn-lg btn-danger float-right" href="#">VOLVER</button>
        </div>

        <div class="row no-gutters">
            <div class="col-sm-6 mt-5">
                <div class="card-block px-2">
                    <p class="card-text text-white" id="text"> España se encuentra en plena Guerra Civil entre nacionalistas y republicanos
                    El bando republicano, está formado por el Gobierno, junto con sindicatos, comunistas,
                    anarquistas, obreros y campesinos.
                    En el bando nacionalista, está la parte rebelde del ejército, la burguesía, los terratenientes y,
                    por lo general, las clases más altas. <br>
                    
                    El bando republicano está apoyado por la Unión Soviética, que apoya la República por sintonía
                    ideológica y consideraciones geoestratégicas. Envía armas, si bien están llegando de forma
                    dispersa y son de peor calidad que las recibidas por los contrarios.
                    El resto de países democráticos europeos también están del lado de la República, pero en una
                    posición neutral, la única ayuda que se recibe por su parte son voluntarios de las Brigadas
                    Internacionales. <br>
                    
                    El bando nacionalista, liderado por el General Francisco Franco, tiene el soporte activo de los
                    gobiernos fascistas de Alemania e Italia, los cuales dan su apoyo enviando armamento,
                    munición, soldados y equipos aéreos como la Legión Cóndor alemana.
                    El bando nacionalista tiene ocupada prácticamente toda la península, pero Barcelona, capital
                    de Cataluña, resiste…
                </div>
            </div>
            
            <div class="col-sm-6">
                <img src="../assets/img/barcelona.jpg" class="img-fluid" id="imgContext"> 
            </div>

            
        </div>          
</div>



<?php endblock() ?>
