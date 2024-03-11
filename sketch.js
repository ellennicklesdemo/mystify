/*
Inspired by the classic Windows Mystify screensaver

Based on code translation from Chris DeLeon's Programming in 5 minutes: remaking “Mystify Your Mind” Windows 95-style screensaver effect
https://www.youtube.com/watch?v=-X_A1Hqj-qA
*/

let mystifies = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  strokeWeight(2);

  for (let i = 0; i < 10; i++) {
    let mystify = new Mystify();
    mystifies.push(mystify);
  }
}

function draw() {
  background(0, 10);

  for (let i = 0; i < mystifies.length; i++) {
    mystifies[i].show();
    mystifies[i].move();
  }
}

class Mystify {
  constructor() {
    this.x1 = this.getWidth();
    this.y1 = this.getHeight();
    this.x2 = this.getWidth();
    this.y2 = this.getHeight();
    this.x1speed = this.getRandomNumber();
    this.y1speed = this.getRandomNumber();
    this.x2speed = this.getRandomNumber();
    this.y2speed = this.getRandomNumber();
  }
  
  // refactor generic random number generator functions
  getWidth() {
    return random(width);
  }
  
  getHeight() {
    return random(height);
  }
  
  getRandomNumber() {
    return random(-10, 10)
  }
  
  show() {
    line(this.x1, this.y1, this.x2, this.y2);
  }

  move() {
    this.x1speed = this.bounce(this.x1, 0, width, this.x1speed);
    this.y1speed = this.bounce(this.x1, 0, height, this.y1speed);
    this.x2speed = this.bounce(this.x2, 0, width, this.x2speed);
    this.y2speed = this.bounce(this.y2, 0, width, this.y2speed);
    
    this.x1 += this.x1speed;
    this.y1 += this.y1speed;
    this.x2 += this.x2speed;
    this.y2 += this.y2speed;
  }

  // refactor with a generic bounce function
  bounce(num, min, max, speed) {
    // is number outside these 2 boundary numbers?
    if (num < min|| num > max) {
      // if so, flip the sign of any rate of change
      speed *= -1;
    }
    return speed;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
