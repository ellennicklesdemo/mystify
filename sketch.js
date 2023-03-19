// Inspired by the classic Windows Mystify screensaver

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
    this.x1 = random(width);
    this.y1 = random(height);
    this.x2 = random(width);
    this.y2 = random(height);
    this.x1speed = random(-5, 5);
    this.y1speed = random(-5, 5);
    this.x2speed = random(-5, 5);
    this.y2speed = random(-5, 5);
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

  // a generic bounce function
  bounce(num, min, max, speed) {
    // is number outside these 2 boundary numbers?
    if (num < min|| num > max) {
      // if so, flip the sign of the rate of change
      speed *= -1;
    }
    return speed;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
