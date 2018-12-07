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

//OTHERS
var images = [	'url(../../assets/img/roca.png)', 
				'url(../../assets/img/skull.png)', 
				'url(../../assets/img/rock2.png)',
				'url(../../assets/img/roca.png)',
				'url(../../assets/img/rock2.png)',
				'url(../../assets/img/roca.png)',];

var children = [
				'url(../../assets/img/girl.gif)',
				'url(../../assets/img/girl2.gif)',
				'url(../../assets/img/girl3.gif)',
				'url(../../assets/img/girl4.gif)'];
function restartGame() {
	window.location.reload();
}

//Start the game when the page is load
$(document).ready(function() { 
    window.game = new Game(); 
    //show text
    setLifeText();
    //pad limitations, only move inside #field and axis X
    $('#pad').draggable({ axis: 'x', containment: '#field' }); 
});


// build everything and start the game loop
function Game() {
    window.bricks = []; //bricks array
    
    //number of bricks 
	this.column = 3;
	let cookies = getCookies();
	let consecutiveGameOvers = parseInt(cookies.consecutiveGameOvers || "0");
	if (consecutiveGameOvers>2) {
		this.column = 1;
	}
	this.bricksPerRow = 6;

	for (x = 0; x < this.bricksPerRow; x++) {
		var brick = new Brick(x, 0);
		window.bricks.push(brick);
		brick.render(children, "child");
	}

	for (y = 1; y < this.column +1; y++) {
		for (x = 0; x < this.bricksPerRow; x++) {
			var brick = new Brick(x, y);
			window.bricks.push(brick);
			brick.render();
		}
	}

	this.pad = new Pad(this.bricksPerRow);
	this.ball = new Ball();
	setTimeout(function() {
		ballInterval = setInterval(moveBall, 10);
		isNewGame = false;
	}, 1000)
	
}


// show the lifes player has
function setLifeText() {
	$('#scores').text('Lifes left: ' + lifeLeft); //Modificamos el texto
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


//[Easier Mode after 1 min game]

//After 1 min, the ball reduce its velocity
setTimeout(function() {
    if(lifeLeft>0){
    changeBallInterval(10*2);
    }
}, 600000);

//change the ms of the moveball function and shows the div text for a moment
function changeBallInterval(ms) {
    $('#slower').fadeIn(1000);
    $('#slower').fadeOut(4000);
	clearInterval(ballInterval);
    ballInterval = setInterval(moveBall, ms);
  
}


// bricks are here
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
		if (this.brick.hasClass("child")) {
			this.brick.animate({ "left": (($("#field").width() / 2) - this.brick.width() / 2) + "px", top: $("#field").height() *0.75 + "px"}, 1000, undefined, function() {

				that.brick.fadeOut(200, function() {
					that.brick.remove();
				});
			} );
		} else {
			this.brick.fadeOut(200, function() {
				that.brick.remove();
			});
		}
    	
  	}
}

// player controlled pad here
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

// ball here
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

// function to move ball
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


function ballDirection(direction){

	if(direction === '+'){

		direction = '-';

	}else{

		direction = '+';
	}
	
	return direction;
}

function getCookies() {
	let cookies = {};
			
	document.cookie.split(/;\s?/).forEach(function(c) {
		let cookieKey = c.split("=")[0];
		cookies[cookieKey] = c.split("=")[1];
	})

	return cookies;
}

// check collision of the ball with bricks
function checkCollision(ball) {
	var fieldWidth = parseInt($('#field').css('width'));
	var fieldHeight = parseInt($('#field').css('height'));

	var pad = window.pad;
	var padTop = parseInt(pad.css('top'));
	var padLeft = parseInt(pad.css('left'));

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

	// check if palyer wins
	if (window.bricks.length === 0) {
		if (!gameEnds) {
			gameEnds = true;
			document.cookie = "consecutiveGameOvers=0";
			ball.remove();
			$('#game-text').text('YOU WIN!')
			$('#game-over').fadeIn(1000);
		}
	}

}



// KEYPRESS OPTIONS

//move right or left
$(document).keydown(function(e) {

	switch (e.which) {

	case 37: //left arrow
		e.preventDefault();
		if (!padLeftPressed) window.pad.animate({
            left: '0'}, 
            calcAnimDuration(0));
		    padLeftPressed = true;
            break;
        
	case 39: //right arrow
		e.preventDefault();
		var fieldWidth = parseInt(window.pad.css('width'));
		var x = 1152 - fieldWidth;
        
        if (!padRightPressed) window.pad.animate({
            left: x },
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

