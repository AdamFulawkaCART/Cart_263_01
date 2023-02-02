
let particles = [];

function setup() {
  createCanvas(500, 500);
}

function draw() {

  background(255, 153, 0);
  for (let i = 0; i <= width; i++) {
    let inter = map(i, 0, width, 0, 1);
    let c = lerpColor(color(255, 153, 0), color(255, 255, 153), inter);
    stroke(c);
    line(i, 0, i, height);
  }

  rect(30, 20, 55, 55);
  
}

rect
  for (let i = 0; i < particles.length; i++) {
    let particle = particles[i];
    particle.update();
    particle.display();
  }


function mousePressed() {
  let particle = new Particle(mouseX, mouseY);
  particles.push(particle);
}
//particle parameters 
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(10, 40);
    this.speed = random(1, 3);
    this.color = color(random(200, 255), random(150, 204), 100);
    this.lifetime = 255; 
    //lifetime parameter isn't working
  }

  //wanted the particles to connect, but it's not working



  update() {
    this.x += this.speed * cos(this.angle);
    this.y += this.speed * sin(this.angle);
    this.angle += random(-0.1, 0.1);
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }
}

