function Animatable(alley,Pins,Explosion,BowlingBall) {
  this.BowlingBall = BowlingBall
  this.Explosion = Explosion
  this.Pins = Pins
  this.alley = alley

  this.ball = null
  this.explosions = []

  this._updatePins = function() {
    var hits = [];
    if (this.ball != null) {
      for (let i = 0;i < this.pins.all.length;i++) {
        if (this._ballHitsPin(this.ball,this.pins.all[i])) {
          amountRemoved = this._pinCollision(i)
          i -= (amountRemoved - 1)
        }
      }
    }
  }

  this._ballHitsPin = function(ball,pin) {
    var ballPosition = ball.getPosition()
    var ballRadius = ball.radius
    var pinPosition = pin.position
    var xDistance = ballPosition.x - pinPosition.x
    var yDistance = ballPosition.y - pinPosition.y
    var normal = Math.sqrt(xDistance ** 2 + yDistance ** 2)
    if (normal < ballRadius) {
      return true
    }
    return false
  }

  this.newBall = function(lineCoordinates) {
    this.ball = new this.BowlingBall(lineCoordinates)
  }

  this.newPins = function() {
    this.pins = new this.Pins
  }

  this._updateBall = function(delta) {
    if (this.ball != null) {
      this.ball.update(delta)
      var ballPosition = this.ball.getPosition()
      if (this.alley.outOfLane(ballPosition)) {
        this._ballExplosion()
      }
    }
  }

  this._updateExplosions = function(delta) {
    for (let i = 0;i < this.explosions.length;i++) {
      this.explosions[i].update(delta)
    }
  }

  this._ballExplosion = function() {
    var ballPosition = this.ball.getPosition()
    this.ball = null
    ballExplosion = new Explosion(ballPosition,70,'black')
    this.explosions.push(ballExplosion)
    this.countPins(this.pins.all.length)
    setTimeout(() => this.explosions.shift(), 2000)
  }

  this._pinCollision = function(index) {
    toBeRemoved = this.pins.calculateRicochets(index)
    for (let i = 0;i < toBeRemoved.length; i++) {
      pinExplosion = new Explosion(this.pins.all[toBeRemoved[i]].position,40,this.pins.all[toBeRemoved[i]].colour)
      this.explosions.push(pinExplosion)
    }
    for (let i = 0;i < toBeRemoved.length; i++) {
      this.pins.all.splice(toBeRemoved[i], 1)
    }
    setTimeout(() => this.explosions.shift(), 2000)
    return toBeRemoved.length
  }

  this.update = function(delta) {
    this._updateBall(delta)
    this._updateExplosions(delta)
    this._updatePins()
  }

}

module.exports = Animatable
