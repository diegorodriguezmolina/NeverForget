//GAME VARIABLES

var gameWidth = 400;
var gameHeight= 400;

var score=0;
var lives = 5;

var gin=0;
var lose=0;

//BALL VARIABLES

var ballDiameter = 10;
var ball = {x: gameWidth/2, //middle of the screen
            y: gameHeight * 2/3,//position two thirds of the way down on the screen
            w:ballDiameter, 
            h:ballDiameter};

var dx = -2; //ball's movement in the x direction
var dy = 2; //ball's movement in the y direction


//PLAYER VARIABLES

var playerWidth=75; //width of the rectangle of the player
var playerHeight=15;//height of the rectangle of the player

var player = {  x: gameWidth * 1/4, //starts the player 1/4 of the way across the screen
                y: gameHeight -16,
                w: playerWidth, 
                h:playerHeight};

//how much the player will move by when the keys are pressed
var playerSpeed = 5;

//values of the key presses 
var left=0;
var right=0;

//BLOCK VARIABLES

var blocks = [];
var blockNum=0;

//block creation
//The blocks are 40 pixels wide and 20 pixels tall. 
//The "show" variable of each block will be used to get rid of blocks when the ball hits them

for(var i=0;i<8;i++){
    for(var j=0;j<5;j++){
        blocks[blockNum] = {x:i * 50, 
                            y: j*30,
                            w:40, 
                            h:20,
                            show:1};
        blockNum++;
    }
}

var draw = function(){
    //RGB
    background(102,204,255);

    drawBlocks();
    drawBall();
    drawPlayer();
    drawText();
};
