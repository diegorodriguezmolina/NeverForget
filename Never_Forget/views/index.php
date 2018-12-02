<?php include "../templates/master.php" ?>
<?php startblock('principal') ?>

    <?php startblock('head') ?>
        <link rel="stylesheet" href="../Styles/Tindex.css">
        <link rel="stylesheet" href="../Styles/modals.css">
    <?php endblock() ?>

        <video autoplay muted loop id="myVideo">
            <source src="../assets/videos/videoIndex.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
        </video>

        <div class="container-fluid h-100"> 
        <?php require_once "./partials/mensajes.php" ?>
    		<div class="row w-100 align-items-center justify-content-center">
    			<div class="col text-center">
                    <h1 id="Title" class="text-white">NEVER FORGET</h1>
                    <p id = indexText class="text-white">España está en plena Guerra Civil entre republicanos y nacionalistas</p>
                    <p id = indexText class="text-white"> El bando nacionalista gana posiciones gracias a la ayuda de países afines</p>
                    <p id = indexText class="text-white"> Barcelona, capital de Catalunya,</p>
                    <p id = indexText class="text-white">     Resiste</p>
                    <button type="button" class="btn-lg btn-danger regular-button mr-5"  data-toggle="modal" data-target="#LoginModal">LOG IN</button>
                    <button type="button" class="btn-lg btn-danger regular-button mr-5"  data-toggle="modal" data-target="#RegistreModal">REGISTER</button>
    			</div>	
    		</div>
    	</div>
              <!-- MODAL LOGIN -->
              <div class="modal fade" id="LoginModal" tabindex="-1" role="dialog" aria-labelledby="LoginModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document" style="width:750px;">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="LoginModalLabel">Log In</h5>
                </div>
                <div class="modal-body">
                    <form action="./mainController.php" method="post">
                        <div class="row">
                            <div class="col-25">
                                <label for="email">E-mail</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="email" name="email" placeholder="Your e-mail..">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="password">Password</label>
                            </div>
                            <div class="col-75">
                                <input type="password" id="password" name="password" placeholder="Your password..">
                            </div>
                        </div>
                   
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="sumbit" class="btn btn-primary" name="login">Log In</button>
                </div>
                </form>
                </div>
            </div>
        </div>
        <!-- MODAL REGISTRE -->
        <div class="modal fade" id="RegistreModal" tabindex="-1" role="dialog" aria-labelledby="RegistreModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document" style="width:750px;">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="RegistreModalLabel">Register</h5>
                </div>
                <div class="modal-body">
                    <form action="./mainController.php" method="post">
                        <div class="row">
                            <div class="col-25">
                                <label for="name">Name</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="name" name="name" placeholder="Your e-mail..">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="email">E-mail</label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="email" name="email" placeholder="Your e-mail..">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="password">Password</label>
                            </div>
                            <div class="col-75">
                                <input type="password" id="password" name="password" placeholder="Your password..">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="repassword">Re password</label>
                            </div>
                            <div class="col-75">
                                <input type="password" id="repassword" name="repassword" placeholder="Repeat your password..">
                            </div>
                        </div>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="sumbit" class="btn btn-primary"  name="register">Register</button>
                </div>
                </form>
                </div>
            </div>
        </div>
        <script type="text/javasceipt" src="../scripts/loginModal.js"></script>      
<?php endblock() ?>
