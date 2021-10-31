let particles = [];
let speedLimit = 5;
let time = 0;
let opacity=80;
let button_a = false;
function setup() {
  createCanvas(720, 480);
}

function draw() {
  background(0);
  time++;
  if (time%60==1&&particles.length < 20)
    particles.push(new Particle(2));

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      for (let k = j + 1; k < particles.length; k++) {
        for (let l = k + 1; l < particles.length; l++) {
          noFill();
          curve(
            particles[i].loc.x,
            particles[i].loc.y,
            particles[j].loc.x,
            particles[j].loc.y,
            particles[k].loc.x,
            particles[k].loc.y,
            particles[l].loc.x,
            particles[l].loc.y
          );
        }
      }
    }
  }
  for (let i = 0; i < particles.length - 1; i++) {
    interaction(i, i + 1, speedLimit);
  }

  if (mouseIsPressed) {
    let mouse = createVector(mouseX, mouseY);
    let particle_d = p5.Vector.sub(mouse, particles[0].loc);
    particle_d.normalize();
    particle_d.mult(0.5);
    particles[0].vel.add(particle_d);
    particles[0].vel.limit(5);
  } else {
    interaction(particles.length - 1, 0, speedLimit);
  }
  if(keyIsPressed)
  {
    button_a=true;
  }
  if(button_a==true)
  {
    stroke(80,188,223,opacity);
    if(time%10==1)
    {
      opacity=opacity-1;
    }
  }
}
