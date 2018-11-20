<?php 
require_once $_SERVER["DOCUMENT_ROOT"] . "/BD/librerias/ti.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        <?php startblock('principal') ?>
        <?php endblock() ?>
    </title>
    <link rel="stylesheet" href="css/bootstraplux.css">
    <link rel="stylesheet" href="/NEVER_FORGET/Styles/STemplate.css">

    <script src="/NEVER_FORGET/js/jquery-3.3.1.min.js"></script>
    <script src="/NEVER_FORGET/js/popper.min.js"></script>
    <script src="/NEVER_FORGET/js/bootstraplux.min.js"></script>

</head>
<body>
    <nav class="nav-top navbar navbar-dark bg-primary">
    
    </nav>
        
    <div class="container col-11 mt-4">
        
        <nav class="nav-center navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Never Forget</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#">About as</a>
                </div>
            </div>
        </nav>
    </div>  
 
    
    <?php startblock('principal') ?>
    <?php endblock() ?>

</body>
</html>
