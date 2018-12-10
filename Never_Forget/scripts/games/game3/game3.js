//PAD VARIABLES
var padSpeed = 0.8;
var padLeftPressed = false;
var padRightPressed = false;

//BALL VARIABLES
var ballSpeedY = 4;
var ballSpeedX = ballSpeedY/2;
var ballDirectionX;
Math.random() > 0.5 ? ballDirectionX = '+' : ballDirectionX = '-';
var ballDirectionY = '+';
var ballInterval;
var isNewGame = true;
var gameEnds = false;

var lastPlayerCollisionInMs = +(new Date());

//PLAYER VARIABLES
var lifeLeft = 1;
var counter = 4;

//IMAGES
var images = [	'url(../../assets/img/game3_roca.png)', 
				'url(../../assets/img/game3_skull.png)', 
				'url(../../assets/img/game3_rock2.png)',
				'url(../../assets/img/game3_roca.png)',
				'url(../../assets/img/game3_rock2.png)',
				'url(../../assets/img/game3_roca.png)',];

var children = [
				'url(../../assets/img/game3_girl.gif)',
				'url(../../assets/img/game3_girl2.gif)',
				'url(../../assets/img/game3_girl3.gif)',
				'url(../../assets/img/game3_girl4.gif)'];

//reload the game, function for the try again button				
function restartGame() {
	window.location.reload();
}

//scape keydown - look for pause code
$(window).keydown(function (e) {
	if (e.keyCode === 27) {
	  e.preventDefault()
	  console.log('Escape pressed')
	}
  })

//Start the game when the page is load
$(document).ready(function() { 

    window.game = new Game(); 
    //show text
	setLifeText();
	
    //pad limitations, only move inside #field and axis X
	$('#pad').draggable({ axis: 'x', containment: '#field' }); 
});

function playMusic() {
	var audio = $("audio")[0];
    audio.play();
}


// build everything and start the game loop
function Game() {
    window.bricks = []; //bricks array
    
    //number of bricks 
	this.column = 3;
	this.bricksPerRow = 6;

	//if the player lose, the counter inside cookies add 1
	let cookies = getCookies();
	let consecutiveGameOvers = parseInt(cookies.consecutiveGameOvers || "0");

	//if loses X times, easy mode with 1 column
	if (consecutiveGameOvers>2) {
		this.column = 1;
		lifeLeft= 5;
	}

	//child creation
	for (x = 0; x < this.bricksPerRow; x++) {
		var brick = new Brick(x, 0);
		window.bricks.push(brick);
		brick.render(children, "child");
	}

	//other bricks creation
	for (y = 1; y < this.column +1; y++) {
		for (x = 0; x < this.bricksPerRow; x++) {
			var brick = new Brick(x, y);
			window.bricks.push(brick);
			brick.render();
		}
	}

	//pad creation
	this.pad = new Pad(this.bricksPerRow);
	this.ball = new Ball();



//dialog with game instructions
$( "#dialog" ).dialog({
	modal: true,
	resizable: false,
	draggable: false,
	close: function( event, ui ) {
		playMusic();
		//countdown to start the game
		var intervalCount = setInterval(function() {
			counter--;
			setCounter();

			//change countdown to START and hide it
			if (counter == 0) {
				$( "#countdown" ).text('START!');
				clearInterval(intervalCount);
				//hide the countdown
				hideText($( "#countdown" ));
				//Lluis starts to move
				startMove();				
			}
		}, 1000);
	},
	buttons: {
			//when clicks OK, starts the countdown 
			Ok: function() {
				$( this ).dialog( "close" );
			
				
			}		  
		}
	});

//ball (Lluis) starts to move after 2 second
function startMove(){
	setTimeout(function() {
		ballInterval = setInterval(moveBall, 10);
		isNewGame = false;
	}, 1000);
	
	}
}

//function to hide divs
function hideText(text){
	setTimeout(function() {
		text.hide();
	}, 1000);
}


// show the lifes player has
function setLifeText() {
	$('#scores').text('Lifes left: ' + lifeLeft); //Modificamos el texto
}

//show the countdown
function setCounter() {
	$('#countdown').text(counter); //Modificamos el contador
}

// calculate duration of jquery animation based on pixel distance
function calcAnimDuration(x) {

	var field_width = parseInt($('#field').css('width')); // 800
	var padWidth = parseInt(window.pad.css('width')); //134
	var padLeft = parseInt(window.pad.css('left')); //333
    
    if (x === 0) {

		return (padLeft / padSpeed)

	} else {

		return ( (field_width-padWidth-padLeft) / padSpeed)
	}
}


// bricks position
function Brick(x, y) {

	var field_width = parseInt($('#field').css('width')); // available field for bricks
	var all_blocks_width = field_width * 0.9

    this.spacing = (field_width - all_blocks_width) / 7
    this.width = all_blocks_width / 6; // divided by the amount of bricks per row
	this.height = this.width / 2;
	this.top = (this.spacing + this.height) * y + this.spacing
	this.left = (this.width + this.spacing) * x + this.spacing

    //creates one div for each brick with the css info specified before
	this.render = function(backgrounds, classId) {
		var self = this;

		backgrounds = backgrounds || images;

		let backgroundImage = backgrounds[Math.floor(Math.random() * backgrounds.length)];

		self.brick = $('<div></div>')
			.addClass("brick")
			.css('width', this.width)
			.css('height', this.height)
			.css('top', this.top )
            .css('left', this.left)
			.css('background-image', backgroundImage);
			
			if (classId) {
				this.brick.addClass(classId);
			}

		$('#field').append(this.brick);
	}

	this.kill = function(cb) {
		
		let that = this;

		//if brick is a child
		if (this.brick.hasClass("child")) {
			//move to the door fading out and remove
			this.brick.animate({ "left": (($("#field").width() / 2) - this.brick.width() / 2) + "px", top: $("#field").height() *0.75 + "px"}, 1000, undefined, function() {
				//fadeOut and remove it after
				that.brick.fadeOut(200, function() {
					that.brick.remove();
				});
			} );
		//other bricks
		} else {
			//fadeOut without moving and remove
			this.brick.fadeOut(200, function() {
				that.brick.remove();
			});
		}
    	
  	}
}

// Pad control
function Pad(n) {
	var field_width = parseInt($('#field').css('width'));
	var fieldHeight = parseInt($('#field').css('height'));
	this.width = field_width / n;
	this.height = 200; //this.width / 5;
    window.pad = $('<div id="pad"><div id="touch"></div></div>')
		.css('width', this.width) //should be this.width
		.css('height', this.height)
		.css('top', fieldHeight * 0.75)
		.css('left', field_width / 2 - this.width / 2);

	$('#field').append(window.pad);
}

// Ball config
function Ball() {
	var fieldWidth = parseInt($('#field').css('width'));
	this.width = fieldWidth * 0.10;
	this.height = this.width;
	window.ball = $('<div class="ball"></div>')
		.css('width', this.width)
		.css('height', this.height)
		.css('border-radius', this.width/2)
		.css('left', fieldWidth/2-this.width/2)
		.css('top', fieldWidth * (isNewGame ? 0.60 : 0.35));

	$('#field').append(window.ball);
}

// function to move ball + check collision
function moveBall() {
	var ball = window.ball;
	ball.css('top', ballDirectionY+'='+ballSpeedY);
	ball.css('left', ballDirectionX+'='+ballSpeedX);
	if (ballDirectionX == "-") {
		ball.css('transform', 'inherit');
	} else {
		ball.css('transform', 'scaleX(-1)');
	}
	
	checkCollision(ball);
}

//Ball direction control options
function ballDirection(direction){

	if(direction === '+'){

		direction = '-';

	} else {

		direction = '+';
	}
	
	return direction;
}


// check collision of the ball with bricks
function checkCollision(ball) {
	var fieldWidth = parseInt($('#field').css('width'));
	var fieldHeight = parseInt($('#field').css('height'));

	var pad = window.pad;
	//obtain the size of the pad 
	var padTop = parseInt(pad.css('top'));
	var padLeft = parseInt(pad.css('left'));

	//obtain the size of the ball 
	var ballTop = parseInt(ball.css('top'));
    var ballLeft = parseInt(ball.css('left'));
    
	// player collision check
	if (padTop <= (ballTop+ball.width()) && !( (padTop - 10) <= (ballTop+ball.height()/2) ) 
	&& padLeft <= (ballLeft+ball.width()/4*3) && (padLeft + pad.width()) >= (ballLeft+ball.width()/4))
	{
		let currentTimeInMs = +(new Date());
		if (lastPlayerCollisionInMs < currentTimeInMs - 300) { //Avoid ball collide twice with the player
			let padCenter = padLeft + (pad.width() / 2);
			let ballCenter = ballLeft + (ball.width() / 2);
			let colissionPoint = ballCenter - padCenter;

			ballSpeedX = colissionPoint * 0.02;
			ballDirectionX = ballSpeedX < 0 ? "-" : "+";
			ballSpeedX = Math.abs(ballSpeedX);

			ballDirectionY = ballDirection(ballDirectionY);
			
			lastPlayerCollisionInMs = +(new Date()); //Update last player collision
		}		
	}


	// field collision check
	if (ballTop < 0) {
		ballDirectionY = ballDirection(ballDirectionY);
	} else if ( ballLeft < 0 || (ballLeft+ball.width() >= fieldWidth) ) {
		ballDirectionX = ballDirection(ballDirectionX);
	}


	// bricks collision check
	var BreakException= {}; // to interupt array forEach lood if brick is hit
	try {
		var done = false;
		window.bricks.forEach(function(brick) {
			var brickBottom = brick.top + brick.height;
			var brickRight = brick.left + brick.width;
			// if brick is hit destroy it and do some stuff
			if ( brickBottom >= ballTop && brick.left < ballLeft+ball.width()/2 && brickRight > ballLeft+ball.width()/2 ) {
				ballDirectionY === '+' ? ballDirectionY = '-' : ballDirectionY = '+';
				done = true; // variable to interrupt loop
				var i = window.bricks.indexOf(brick);
				if (i > -1) window.bricks.splice(i, 1); // delete brick from an array

				brick.kill();				
			}
			if (done) throw BreakException; // interrup array
		});
	} catch(e) {
		if (e!==BreakException) throw e;
	}

	// bottom collision check
	if (fieldHeight < ballTop) {
		if (lifeLeft > 1) {
			lifeLeft--;
			ball.remove();
			Math.random() > 0.5 ? ballDirectionX = '+' : ballDirectionX = '-';
			var ball = new Ball(); // create new ball
            setLifeText(); // update player life text
            
		} else {
			// game over stuff
			if (!gameEnds) {
				gameEnds = true;
				lifeLeft = 0;
				setLifeText();
				ball.remove();
				let cookies = getCookies();
				let consecutiveGameOvers = parseInt(cookies.consecutiveGameOvers || "0");
				document.cookie = "consecutiveGameOvers=" + (consecutiveGameOvers + 1);
				$('#game-over').fadeIn(1000);
			}
			
		}
	}

	// check if player wins
	if (window.bricks.length === 0) {
		if (!gameEnds) {
			gameEnds = true;
			
			document.cookie = "consecutiveGameOvers=0";
			$('#game-text').text('YOU WIN!');
			$('#game-over').fadeIn(1000);
			$('#continue').text('Continue the adventure');
			ball.remove();
			//******************************************** */cambiar HREF a siguiente pantalla

			
		}
	}

}

//return the cookies using a split
function getCookies() {
	let cookies = {};
	
	//slit to divide the cookies info
	document.cookie.split(/;\s?/).forEach(function(c) {
		//key at position 0
		let cookieKey = c.split("=")[0];
		//with the key add the value at position 1
		cookies[cookieKey] = c.split("=")[1];
	})

	return cookies;
}

// KEYPRESS OPTIONS
//move right or left
$(document).keydown(function(e) {

	switch (e.which) {

	case 37: //left arrow
		e.preventDefault();
		if (!padLeftPressed) window.pad.animate({left: '0'}, 
            calcAnimDuration(0));
		    padLeftPressed = true;
            break;
        
	case 39: //right arrow
		e.preventDefault();
		var fieldWidth = parseInt(window.pad.css('width'));
		var x = 1152 - fieldWidth; //max position
        
        if (!padRightPressed) window.pad.animate({left: x },
            calcAnimDuration(1));
		    padRightPressed = true;
		    break;
	}
});

// stops if the key is up
$(document).keyup(function(e) {
	switch (e.which) {

	case 37: //left arrow
		padLeftPressed = false;
		window.pad.stop();
        break;
        
	case 39: //right arrow
		padRightPressed = false;
		window.pad.stop();
		break;
	}
});

