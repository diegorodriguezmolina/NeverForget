<?php
    session_start();
    error_reporting(E_ALL);
    ini_set('display_errors', '1');
    include '../librerias/bd.php';

   
    if(isset($_POST['register'])){
        exeinsertUser($_POST['name'],$_POST['email'], $_POST['password'], $_POST['repassword']);

        if(isset($_SESSION['errorRegister'])){
            header('Location: /NeverForget/Never_Forget/views/index.php');
            exit();
        }
        else{
            header('Location: /NeverForget/Never_Forget/views/index.php');
            exit();
        }      
    }

    if(isset($_POST['login'])){
        selectUsuarioByPassword($_POST['emailLogin'], $_POST['passwordLogin']);

        if(isset($_SESSION['error'])){
            header('Location: /NeverForget/Never_Forget/views/index.php');
            exit();
        }
        else{
            header('Location: /NeverForget/Never_Forget/views/userProgress.php');
            exit();
        }      
    }
?>