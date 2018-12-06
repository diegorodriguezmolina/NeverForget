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

//PLAYER VARIABLES
var lifeLeft = 20;

//OTHERS
var images = ['url(../../assets/img/roca.png)', 'url(../../assets/img/skull.png)', 'url(../../assets/img/rock2.png)','url(../../assets/img/kid.png)','url(../../assets/img/roca.png)'];


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
	this.column = 4;
	this.bricksPerRow = 6;

	for (y = 0; y < this.column; y++) {
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
	this.render = function() {
		var self = this;

		self.brick = $('<div></div>')
			.addClass("brick")
			.css('width', this.width)
			.css('height', this.height)
			.css('top', this.top )
            .css('left', this.left)
            .css('background-image', images[Math.floor(Math.random() * images.length)]);

		$('#field').append(this.brick);
	}

	this.kill = function() {
    	this.brick.remove();
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
		.css('top', fieldHeight * 0.9)
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
    

	// player collision check
	if (padTop <= (ballTop+ball.width()) && !( (padTop - 10) <= (ballTop+ball.height()/2) ) && padLeft <= (ballLeft+ball.width()/4*3) && (padLeft + pad.width()) >= (ballLeft+ball.width()/4)
			) {	
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

