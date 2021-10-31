function interaction(a,b,l)
{
  let particle_d
  particle_d=p5.Vector.sub(particles[a].loc,particles[b].loc);
  particle_d.normalize();
  particle_d.mult(0.5);
  particles[b].vel.add(particle_d);
  particles[b].vel.limit(l);
}
