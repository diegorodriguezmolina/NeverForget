<!DOCTYPE html>
<html>
<head>
    <title>Brick Game</title>
    <!--STYLES-->
    <link rel="stylesheet" href="/NeverForget/Never_Forget/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="../../Styles/games/game3.css">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link href="https://fonts.googleapis.com/css?family=Special+Elite" rel="stylesheet">
    
    <!--JQUERY-->
	<script type="text/javascript" src="../../jquery/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="../../jquery/jquery-ui.min.js"></script>
    <script type="text/javascript" src="../../jquery/jquery.ui.touch-punch.min.js"></script>
    
    <!--GAME-->
    <script type="text/javascript" src="../../scripts/games/game3/game3.js"></script>

    <!--BOOTSTRAP-->
    <script src="/NeverForget/Never_Forget/js/popper.min.js"></script>
    <script src="/NeverForget/Never_Forget/js/bootstrap.min.js"></script>
    
    
</head>

<body>
    <audio loop>
        <source src="../../assets/sound/game3_music.mp3" type="audio/mpeg">
    </audio>

	<div id="game-over">
        <div id="game-text">GAME OVER!</div>
        <div class="boton" class="boton text-center">
        <button id="continue" class="btn-lg btn-danger regular-button button" onClick="restartGame();">TRY AGAIN</button>	
        </div>	
	</div>

<!--easy mode disabled
    <div id="slower">
		
        <div id="game-text">Try it slowly </div>
		
	</div>-->

    <div class="container-fluid">
        <div class="col-sm-12">
            <div id="field">

            <div id="dialog" title="Game instructions">
            <h2>Keyboard control</h2>   
            <p>[<] - Move Left</p>
            <p>[>] - Move Right</p>
            <h2>Mouse Control</h2> 
            <p>Hold the left button and move the tab touching it</p>
            </div>

                <div id="countdown"></div>
                <div id="scores">Lifes left:</div>
            </div>   
        </div>    
    </div>


</body>
</html>
