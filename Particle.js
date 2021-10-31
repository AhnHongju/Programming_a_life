class Particle
  {
    constructor(size)
    {
      this.button= false;
      this.loc=createVector(width/2,height/2);
      this.vel=createVector(0,0);
      this.w=size;
      stroke(255,255,255,50);

    }

    update()
    {
      if(keyIsPressed)
      {
        this.button = true;
      }
      let acc=createVector(random(-1,1),random(-1,1));
      this.loc.add(this.vel);
      this.vel.add(acc);
      if(this.loc.x>width||this.loc.x<0)
        {
          this.vel.x*=-1;
          if(this.button==false)
          {
            stroke(random(0,255),
                   random(0,255),
                   random(0,255),
                   random(5,30));
          }
        }
      if(this.loc.y>height||this.loc.y<0)
        {
          this.vel.y*=-1;
          if(this.button==false)
          {
            stroke(random(0,255),
                   random(0,255),
                   random(0,255),
                   random(5,30));
          }
        }
    }
    display()
    {
      ellipse(this.loc.x,this.loc.y,this.w,this.w);
    }
  }
