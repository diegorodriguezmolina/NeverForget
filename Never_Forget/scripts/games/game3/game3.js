// some game variables
var padSpeed = 0.8;
var padLeftPressed = false;
var padRightPressed = false;

var ballSpeedY = 2.5 + Math.random();
var ballSpeedX = ballSpeedY / (Math.random() + 1);
var ballDirectionX;
Math.random() > 0.5 ? ballDirectionX = '+' : ballDirectionX = '-';
var ballDirectionY = '+';
var ballInterval;

var lifeLeft = 3;


$(document).ready(function() { //Cuando la página está cargada, inicializamos el juego
	window.game = new Game(); //Instanciamos game
	setLifeText();
	$('#pad').draggable({ axis: 'x', containment: '#field' }); //Solo se puede mover en el eje x dentro de #field
});

// imprime cuantas vidas tenemos
function setLifeText() {
	$('#scores').text('Lifes left: ' + lifeLeft); //Modificamos el texto
}

// calculate duration of jquery animation based on pixel distance
function calcAnimDuration(x) {
	//debugger;
	var field_width = parseInt($('#field').css('width'));
	var padWidth = parseInt(window.pad.css('width'));
	var padLeft = parseInt(window.pad.css('left'));
	if (x === 0) {
		return (padLeft / padSpeed)
	} else {
		return ( (field_width-padWidth-padLeft) / padSpeed)
	}
}

// listen for key pressing
$(document).keydown(function(e) {
	switch (e.which) {
	case 37: //left arrow
		e.preventDefault();
		if (!padLeftPressed) window.pad.animate({left: '0'}, calcAnimDuration(0));
		padLeftPressed = true;
		break;
	case 39: //right arrow
		e.preventDefault();
		var fieldWidth = parseInt(window.pad.css('width'));
		var x = 800 - fieldWidth;
		if (!padRightPressed) window.pad.animate({left: x }, calcAnimDuration(1));
		padRightPressed = true;
		break;
	}
});
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

function changeBallInterval(ms) {
	clearInterval(ballInterval);
	ballInterval = setInterval(moveBall, ms);
}

// Cambiamos la velocidad después de un minuto  de juego
/*setTimeout(function() {
	changeBallInterval(1000);
}, 1000);*/

// build everything and start game loop
function Game() {
	window.bricks = [];
	this.rows = 4;
	this.bricksPerRow = 6;

	for (y = 0; y < this.rows; y++) {
		for (x = 0; x < this.bricksPerRow; x++) {
			var brick = new Brick(x, y);
			window.bricks.push(brick);
			brick.render();
		}
	}

	this.pad = new Pad(this.bricksPerRow);
	this.ball = new Ball();
	ballInterval = setInterval(moveBall, 10);
}


// bricks are here
function Brick(x, y) {
	var field_width = parseInt($('#field').css('width')); // available field for bricks
	var all_blocks_width = field_width * 0.8
	this.spacing = (field_width - all_blocks_width) / 7
	this.width = all_blocks_width / 6; // divided by the amount of bricks per row
	this.height = this.width / 4;
	this.color = getColor();
	this.top = (this.spacing + this.height) * y + this.spacing
	this.left = (this.width + this.spacing) * x + this.spacing

	this.render = function() {
		var self = this;

		self.brick = $('<div></div>')
			.addClass("brick")
			.css('background-color', this.color)
			.css('width', this.width)
			.css('height', this.height)
			.css('top', this.top )
			.css('left', this.left );

		$('#field').append(this.brick);
	}

	this.kill = function() {
    	this.brick.css('background-color', getColor()).remove();
  	}
}

// player controlled pad here
function Pad(n) {
	var field_width = parseInt($('#field').css('width'));
	var fieldHeight = parseInt($('#field').css('height'));
	this.width = field_width / n;
	this.height = 400; //this.width / 5;
	window.pad = $('<div id="pad"><div id="touch"></div></div>')
		.css('width', this.width) //should be this.width
		.css('height', this.height)
		.css('top', fieldHeight * 0.9)
		.css('left', field_width / 2 - this.width / 2);

	$('#field').append(window.pad);
}

// ball here
function Ball() {
	var fieldWidth = parseInt($('#field').css('width'));
	this.width = fieldWidth * 0.05;
	this.height = this.width;
	window.ball = $('<div class="ball"></div>')
		.css('width', this.width)
		.css('height', this.height)
		.css('border-radius', this.width/2)
		.css('left', fieldWidth/2-this.width/2)
		.css('top', fieldWidth * 0.3);

	$('#field').append(window.ball);
}

// function to move ball
function moveBall() {
	var ball = window.ball;
	ball.css('top', ballDirectionY+'='+ballSpeedY);
	ball.css('left', ballDirectionX+'='+ballSpeedX);
	checkCollision(ball);
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
	// pad collision check
	if (padTop <= (ballTop+ball.width()) && !( (padTop - 10) <= (ballTop+ball.height()/2) ) && padLeft <= (ballLeft+ball.width()/4*3) && (padLeft + pad.width()) >= (ballLeft+ball.width()/4)
			) {
		ballSpeedX = ballSpeedY / (1 + Math.random());
		// if pad is moving during collision do some random stuff
		if (ballDirectionY === '+' && padRightPressed) {
			ballSpeedX += 0.3;
		} else if (ballDirectionY === '-' && padRightPressed) {
			ballSpeedX -= 0.2;
		} else if (ballDirectionX === '-' && padLeftPressed) {
			ballSpeedX += 0.3;
		} else if (ballDirectionX === '-' && padLeftPressed) {
			ballSpeedX -= 0.2;
		}
		ballDirectionY === '+' ? ballDirectionY = '-' : ballDirectionY = '+';
	}
	// field collision check
	if (ballTop < 0) {
		ballDirectionY === '+' ? ballDirectionY = '-' : ballDirectionY = '+';
	} else if ( ballLeft < 0 || (ballLeft+ball.width() >= fieldWidth) ) {
		ballDirectionX === '+' ? ballDirectionX = '-' : ballDirectionX = '+';
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
				if (ballSpeedY < 6) ballSpeedY += 0.2; // increase ball speed after each brick hit
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
			if (ballSpeedY < 5) { // lower speed if its to big after ball hit bottom
				ballSpeedY = ballSpeedY - 1 + Math.random();
			} else {
				ballSpeedY = 3.5 + Math.random();
			}
			ballSpeedX = ballSpeedY / (Math.random() + 1); // change ball x speed
			Math.random() > 0.5 ? ballDirectionX = '+' : ballDirectionX = '-';
			var ball = new Ball(); // create new ball
			setLifeText(); // update player life text
		} else {
			// game over stuff
			lifeLeft = 0;
			setLifeText();
			ball.remove();
			$('#game-over').fadeIn(1000);
		}
	}

	// check if palyer wins
	if (window.bricks.length === 0) {
		ball.remove();
		$('#game-text').text('YOU WIN!')
		$('#game-over').fadeIn(1000);
	}

}

// random color for bricks

function getColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#00000';
    //for (var i = 0; i < 6; i++ ) {
      //  color += letters[Math.floor(Math.random() * 16)];
    //}
    return color;
}
