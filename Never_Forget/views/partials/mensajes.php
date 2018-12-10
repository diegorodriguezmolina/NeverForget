<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
    if(isset($_SESSION['error'])){
        echo '<p><font color="red">';

        echo $_SESSION['error'];
        unset($_SESSION['error']);

        echo '</font></p>';
    }
    if(isset($_SESSION['errorRegister'])){
  

        echo '<p><font color="red">';

        echo $_SESSION['errorRegister'];
        unset($_SESSION['errorRegister']);

        echo '</font></p>';
    }
    elseif(isset($_SESSION['mensaje'])){
        echo '<p><font color="red">';

        echo $_SESSION['mensaje'];
        unset($_SESSION['mensaje']);

        echo '</font></p>';
    }
?>
