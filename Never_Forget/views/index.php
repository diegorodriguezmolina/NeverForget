<?php include "../templates/master.php" ?>

    <?php startblock('head') ?>
        <link rel="stylesheet" href="../Styles/Tindex.css">
    <?php endblock() ?>

<?php startblock('principal') ?>
        <video autoplay muted loop id="myVideo">
            <source src="../assets/videos/videoIndex.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
        </video>
       
        <div class="container-fluid h-100 prueba"> 
    		<div class="row w-100 align-items-center justify-content-center">
    			<div class="col text-center">
                    <h1 id="Title" class="text-white">NEVER FORGET</h1>
                    <section id="section03" class="demo">
                        <a id="botonBajar" href="#texto"></a>
                    </section>
    			</div>	
    		</div>
    	</div>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                        <input type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Send message</button>
                </div>
                </div>
            </div>
        </div>  
        <div id="texto" class="texto text-center">
            <p id = indexText class="text-white">España está en plena Guerra Civil entre republicanos y nacionalistas</p>
            <p id = indexText class="text-white">El bando nacionalista gana posiciones gracias a la ayuda de países afines</p>
            <p id = indexText class="text-white">Barcelona, capital de Catalunya,</p>
            <p id = indexText class="text-white">Resiste</p>
            <button type="button" class="btn-lg btn-danger regular-button mr-5 button" style="margin-left:80px" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">SING IN</button>
            <button type="button" class="btn-lg btn-danger regular-button mr-5 button"  data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">LOGIN</button>
        </div>     
        <script type="text/javascript" src="../scripts/loginModal.js"></script>      
<?php endblock() ?>
