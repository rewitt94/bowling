function BowlingBall(coordinates) {
  this.x = coordinates[0].x
  this.y = coordinates[0].y
  this.dx = (coordinates[1].x - coordinates[0].x) * 2.5
  this.dy = (coordinates[1].y - coordinates[0].y) * 2.5
  this.radius = 60

  this.update = function(delta) {
    this._move(delta)
    this._changeRadius()
  }

  this.getPosition = function() {
    return {x:this.x,y:this.y}
  }

  this.outOfBounds = function() {
    if (this.y > 800 || this.y < 0) {
      return true
    }
    return false
  }

  this._move = function(delta) {
    this.x += this.dx * 0.0005 * delta;
    this.y += this.dy * 0.0005 * delta;
  }

  this._changeRadius = function(delta) {
    this.radius = this.y * 0.03 + 20;
  }

}

module.exports = BowlingBall
