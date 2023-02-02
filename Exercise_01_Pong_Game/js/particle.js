let particles = [];

function setup() {
  createCanvas(800, 800);
  
}

function draw() {
  background(240, 248, 255);


//My Array of Particles
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
//particle creation and parameters 
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(30, 70);
    this.speed = random(1, 2);
    this.angle = random(0, 2 * PI);
    this.color = color(random(200, 255), random(150, 204), 100);
    this.lifetime = 255; 
  }

  

  //wanted the particles to connect as in this example, but it's not working
  
      

  update() {
    this.x += this.speed * cos(this.angle);
    this.y += this.speed * sin(this.angle);
    this.angle += random(-0.1, 0.1);

    //broken lifetime function
    this.lifetime -= 10;
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
    fill(255, this.lifetime);
  }
}

function finished () {
    return (this.lifetime < 0);
    
}



