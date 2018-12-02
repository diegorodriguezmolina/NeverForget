<?php
    session_start();
    include '../librerias/bd.php';

   
    if(isset($_POST['register'])){
        exeinsertUser($_POST['name'],$_POST['email'], $_POST['password'], $_POST['repassword']);

        if(isset($_SESSION['error'])){

            header('Location: /UF1/RESERVES_BD/vistas/index.php');
            exit();
        }
        else{
            header('Location: /UF1/RESERVES_BD/vistas/index.php');
            exit();
        }      
    }

    if(isset($_POST['login'])){
        exeselectUsuarioByPassword($_POST['email'], $_POST['password']);

        if(isset($_SESSION['error'])){

            header('Location: /UF1/RESERVES_BD/vistas/index.php');
            exit();
        }
        else{
            header('Location: /UF1/RESERVES_BD/vistas/index.php');
            exit();
        }      
    }
?>