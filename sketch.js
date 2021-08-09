let pXPos= 250;
let pYPos = 450;
let pLeft, pRight, pTop, pBottom;
let ballRight, ballLeft, ballTop, ballBottom;
let ballXPos = 250;
let ballYPos = 420;
let ballXSpeed;
let ballYSpeed;
let ballXDirection = 1;
let ballYDirection = 1;
let brickRight, brickLeft, brickTop, brickBottom;
let brickXPos = 250;
let brickYPos = 100;
let hit = false;
let a = true;
let score = 0;


function setup() {
    createCanvas(500, 500);
    noStroke();

    ballXSpeed = random(1, 5);
    ballYSpeed = random(1, 5);

    
}
function draw() {
    background(0);
    
    rectMode(CENTER);
    ellipseMode(CENTER);
    
    fill(255, 255, 255);
    rect(pXPos, pYPos, 200, 20);
    rect (brickXPos - 130, brickYPos + 45, 100, 25 );
    rect (brickXPos , brickYPos + 45, 100, 25);
    rect (brickXPos + 130, brickYPos + 45, 100, 25);

    rect (brickXPos - 130, brickYPos + 105, 100, 25);
    rect (brickXPos , brickYPos + 105, 100, 25);
    rect (brickXPos + 130, brickYPos + 105, 100, 25);

    rect (brickXPos - 130, brickYPos + 165, 100, 25 );
    rect (brickXPos , brickYPos + 165, 100, 25);
    rect (brickXPos + 130, brickYPos + 165, 100, 25);




    if(hit == false){
        rect (brickXPos, brickYPos, 250, 50);
        fill(30,38,29);
        rect (brickXPos, brickYPos, 2, 2);
        

    }
    
    fill(255, 0, 0);
    ellipse(ballXPos, ballYPos, 30, 30);

    ballXPos += ballXSpeed * ballXDirection;
    ballYPos += ballYSpeed * ballYDirection;


    
    if (keyIsDown(LEFT_ARROW)) {
        pXPos -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        pXPos += 3;
    }

    pLeft = pXPos - 10;
    pRight = pXPos + 0;
    pTop = pYPos - 10;
    
    ballTop = ballYPos - 15 ;
    ballBottom = ballYPos + 15;
    ballLeft = ballXPos - 125;
    ballRight = ballXPos + 125;

    brickTop = brickYPos - 25;
    brickBottom = brickYPos + 25;
    brickLeft = brickXPos - 125;
    brickRight = brickXPos + 125;

    if (pLeft > ballRight || pRight < ballLeft || pTop > ballBottom || pBottom < ballTop) {

    } 
    else {
        ballYDirection *= -1;

    }
    
    if (ballXPos > brickXPos && ballXPos < brickXPos + 250 && ballYPos + 15 > brickYPos && ballYPos - 15 < brickYPos + 50) {
        hit = true;
        if(a == true){
            ballYDirection *= -1;
            
            a = false;
        }
        score++;
    }
    else if(a){  
        
        console.log("untrue");

    }

    fill( 0, 255, 0)
        textSize(30);
        text("Score: " + score, 355, 30);

   





  

    if (ballXPos > 475 || ballXPos < 15 ) {
        ballXDirection *= -1;
    }
    if (ballYPos < 20 ) {
        ballYDirection *= -1;
    }
    if (ballYPos > 480){
        ballXPos = 250;
        ballYPos = 400;
        pXPos = 250;
        pYPos = 450;

    }

       
    
}
    
