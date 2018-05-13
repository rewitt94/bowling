function Particle(point) {
  
  this.x = point.x
  this.y = point.y
  this.dx = Math.random() - Math.random()
  this.dy = Math.random() - Math.random()

  this.update = function(delta) {
    this._move(delta)
  }

  this._move = function(delta) {
    this.x += this.dx * delta;
    this.y += this.dy * delta;
  }

}

module.exports = Particle
