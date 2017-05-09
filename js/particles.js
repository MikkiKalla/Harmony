(function() {
  var requestAnimationFrame = window.requestAnimationFrame;
})(); 

$( window ).resize(function() {
  ParticleCanvas.width = ($(window).width() - 10);
  ParticleCanvas.height = ($(window).height() - - 30);
});

window.onload = function() {

      var ParticleCanvas = document.getElementById("ParticleCanvas");
      var context = ParticleCanvas.getContext("2d");
      ParticleCanvas.width = ($(window).width() - 20);
      ParticleCanvas.height = ($(window).height() - (- 30));
      document.body.appendChild(ParticleCanvas);


      // All the info stored into an array for the particles
      var particles = {},
          particleIndex = 0,
          settings = {
            density: 10,
            particleSize: 4.6,
            startingX: ParticleCanvas.width / 2,
            startingY: ParticleCanvas.height,
            gravity: -0.01
          };

      // Set up a function to create multiple particles
      function Particle() {
              // Establish starting positions and velocities from the settings array, the math random introduces the particles being pointed out from a random x coordinate
        this.x = settings.startingX * (Math.random() * 10);
        this.y = settings.startingY;

        // Determine original X-axis speed based on setting limitation
        this.vx = (Math.random() * 0 / 3) - (Math.random() * 3 / 3);
        this.vy = -(Math.random() * 1 / 3);

        // Add new particle to the index
        // Object used as it's simpler to manage that an array
        particleIndex ++;
        particles[particleIndex] = this;
        this.id = particleIndex;
        this.life = 10;
        this.maxLife = 900;
        this.alpha = 0.9;
        this.red = 13;
        this.green = 84;
        this.blue = 167;
      }

      // Some prototype methods for the particle's "draw" function
      Particle.prototype.draw = function() {
        this.x += this.vx;
        this.y += this.vy;

        // Adjust for gravity
        this.vy += settings.gravity;
        


        // Age the particle
        this.life++;
        
        this.red += 0;
        
        this.alpha -= 0.003;


        // If Particle is old, it goes in the chamber for renewal
        if (this.life >= this.maxLife) {
          delete particles[this.id];
        }
        
        
        
        // Create the shapes
        context.clearRect(settings.leftWall, settings.groundLevel, ParticleCanvas.width, ParticleCanvas.height);
        context.beginPath();
        context.fillStyle="rgba("+ this.red +", "+ this.green +", "+ this.blue +", " + this.alpha + ")";
        // Draws a circle of radius 20 at the coordinates 100,100 on the ParticleCanvas
        context.arc(this.x, this.y, settings.particleSize, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();

      }

      function animateDust() {
        context.clearRect(0, 0, ParticleCanvas.width, ParticleCanvas.height);

        // Draw the particles
        for (var i = 0; i < settings.density; i++) {
          if (Math.random() > 0.97) {
            // Introducing a random chance of creating a particle
            // corresponding to an chance of 1 per second,
            // per "density" value
            new Particle();
          }
        }

        for (var i in particles) {
          particles[i].draw();
        }
        window.requestAnimationFrame(animateDust);  
    }
    
    animateDust();
};