let particles = [];

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(240, 248, 255);

  for (let i = 0; i < particles.length; i++) {
    let particle = particles[i];
    particle.update();
    particle.display();
  }
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
    this.speed = random(1, 5);
    this.angle = random(0, 2 * PI);
    this.color = color(random(200, 255), random(150, 204), 100);
    this.lifetime = 255; 
  }

  //wanted the particles to connect, but it's not working

  joinParticles(particles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<85) {
        stroke('rgba(255,255,255,0.04)');
        line(this.x,this.y,element.x,element.y);
      }
    })
  }
      

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

