<?php include "./templates/master.php" ?>
<?php startblock('principal') ?>

    <head>
        <link rel="stylesheet" href="Styles/Tindex.css">
    </head>

 

        <div class="container-fluid h-100"> 
    		<div class="row w-100 align-items-center justify-content-center">
    			<div class="col text-center">
                    <h1 id="Title">NEVER FORGET</h1>
                    <button type="button" class="btn-lg btn-outline-danger regular-button mr-5"  data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">SING IN</button>
                    <button type="button" class="btn-lg btn-outline-danger regular-button mr-5"  data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">REGISTER</button>
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

        <script>
            $('#exampleModal').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget) // Button that triggered the modal
            var recipient = button.data('whatever') // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            var modal = $(this)
            modal.find('.modal-title').text('New message to ' + recipient)
            modal.find('.modal-body input').val(recipient)
            })
        </script>
  
<?php endblock() ?>
