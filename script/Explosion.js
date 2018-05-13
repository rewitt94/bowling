const Particle = require('./Particle.js')

function Explosion(point,numberOfParticles,colour) {
  this.origin = point
  this.colour = colour
  this.particles = []

  for (let i = 0;i < numberOfParticles;i++) {
    this.particles.push(new Particle(this.origin))
  }

  this.update = function(delta) {
    for (let i = 0;i <this.particles.length;i++) {
      this.particles[i].update(delta)
    }
  }

}

module.exports = Explosion
