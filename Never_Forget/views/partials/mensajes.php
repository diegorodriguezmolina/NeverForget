<?php
    if(isset($_SESSION['error'])){
        echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">';
        echo '<button type="button" class="close" data-dismiss="alert" aria-label="Close"';
        echo '<span aria-hidden="true">&times;</span>';
        echo '<span class="sr-only">Close</span>';
        echo '</button>';

        echo $_SESSION['error'];
        unset($_SESSION['error']);

        echo '</div>';
    }
    elseif(isset($_SESSION['mensaje'])){
        echo '<div class="alert alert-success alert-dismissible fade show" role="alert">';
        echo '<button type="button" class="close" data-dismiss="alert" aria-label="Close"';
        echo '<span aria-hidden="true">&times;</span>';
        echo '<span class="sr-only">Close</span>';
        echo '</button>';

        echo $_SESSION['mensaje'];
        unset($_SESSION['mensaje']);

        echo '</div>';
    }
?>
