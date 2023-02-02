class Emitter {
    constructor(x,y) { 
            this.position = createVector(x, y);
            this.particles = [];


        }
    update() {
    for (let particle of this.particles){
        let gravity = createVector(0, 0.2);
        particle.applyFroce(gravity);
        particle.update();
        particle.show();
    }

    for (let i = this.particles.length-1; i >=0;)
    if (particles[i].finished()) {
        this.particles.splice(i, 1);
    }

    } 
    
    show() 
        for (let particle of particles){
            particle.show();
         
    }
    }
