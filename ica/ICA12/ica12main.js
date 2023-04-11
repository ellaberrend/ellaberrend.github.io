// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// how you make the ball and draw it

class Ball {
    constructor(x,y,velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }
    draw() {
       ctx.beginPath();
       ctx.fillStyle = this.color;
       ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
       ctx.fill(); 
    }
    update (){
        this.x = this.x + this.velX;
        this.y = this.y + this.velY;
    }
}

const testBall = new Ball(100, 100, 2, 2, "pink", 10);
//const testBall1 = new Ball(400, 400, 2, 2, "blue", 10);
testBall.draw();

//const i = 0;
//while (i<100) {
    //testBall.update;
    //i += 1;
}
//testBall1.draw();

