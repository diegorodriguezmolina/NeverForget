<?php 
require_once $_SERVER["DOCUMENT_ROOT"] . "/NeverForget/Never_Forget/librerias/ti.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        <?php startblock('title') ?>
        <?php endblock() ?>
    </title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="Styles/STemplate.css">
   

    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>

</head>
<body>
        
    <div class="container col-11 mt-4">
        
        <nav class="navSize navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Never Forget</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#">About as</a>
                    <a class="navbar-brand float-right" href="#">
                        <img src="images/usuario.png" width="30" height="30" alt="">
                    </a>
                </div>
            </div>
        </nav>
    </div>  
 
    
    <?php startblock('principal') ?>
    <?php endblock() ?>
    
    <footer class="footer bg-dark">
      <div class="container">
        <span class="text-white">Place sticky footer content here.</span>
      </div>
    </footer>
</body>
</html>
