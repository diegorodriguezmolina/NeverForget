<?php 
require_once $_SERVER["DOCUMENT_ROOT"] . "/NeverForget/Never_Forget/librerias/ti.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <?php startblock('head') ?>
    <?php endblock() ?>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
       
    </title>
    <link rel="stylesheet" href="../css/bootstrap.css">
    <link rel="stylesheet" href="../styles/STemplate.css">
    <link href="https://fonts.googleapis.com/css?family=Special+Elite" rel="stylesheet">

    <script src="../js/jquery-3.3.1.min.js"></script>
    <script src="../js/popper.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>

</head>
<body>
        
        <nav class="navSize navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Never Forget</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav col-11">
                    <a class="nav-item nav-link active" href="index.php">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link active" href="contextoHistorico.php">Historic Context <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="../views/about_us.php">About us</a>
                    
                </div>
                <div class="dropdown float-right col-1">
                    <a class="navbar-brand float-right"role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                        <img src="../assets/img/usuario.png" width="30" height="30" alt="">
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">Logout</a>
                        <a class="dropdown-item" href="#">Progress</a>
                    </div>
                </div>
            </div>
        </nav>
  
 
    
    <?php startblock('principal') ?>
    <?php endblock() ?>

</body>
</html>
