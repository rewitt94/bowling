function Drawer(alley) {
  this.alley = alley

  this.setContext = function(context) {
    this.context = context
  }

  this.drawAnimatable = function(animatable) {
    for (let i = 0;i < animatable.pins.all.length;i++){
      this._drawPin(animatable.pins.all[i].position,animatable.pins.all[i].colour)
    }
    this._drawBowlingBall(animatable.ball)
    for (let i = 0;i < animatable.explosions.length;i++){
      this._drawExplosion(animatable.explosions[i])
    }
  }

  this._drawPin = function(position,colour) {
    var x = position.x
    var y = position.y
    this.context.beginPath();
    this.context.moveTo(x,y);
    this.context.lineTo(x + 3,y);
    this.context.quadraticCurveTo(x + 10,y - 15,x + 3,y - 30)
    this.context.lineTo(x,y - 35);
    this.context.arc(x,y - 35,5,0, Math.PI * 2, false)
    this.context.lineTo(x - 3,y - 30);
    this.context.quadraticCurveTo(x - 10,y - 15,x - 3,y)
    this.context.lineTo(x - 3,y);
    this.context.fillStyle = colour;
    this.context.fill();
  }

  this._drawExplosion = function(explosion) {
    for (let j = 0;j <explosion.particles.length;j++) {
      this.context.beginPath();
      this.context.arc(explosion.particles[j].x,explosion.particles[j].y,2,0, Math.PI * 2, false)
      this.context.fillStyle = explosion.colour;
      this.context.fill()
    }
  }

  this._drawBowlingBall = function(currentBall) {
    if (currentBall != null) {
      this.context.beginPath();
      this.context.arc(currentBall.x,currentBall.y,currentBall.radius,0, Math.PI * 2, false)
      this.context.fillStyle = 'black';
      this.context.fill()
    }
  }

  this.drawBowlingAlley = function() {
    this._drawLeftBound(this.context)
    this._drawLane(this.context)
    this._drawRightBound(this.context)
    this._drawThrowLine(this.context)
  }

  this._drawLeftBound = function() {
    this.context.beginPath();
    this.context.moveTo(0,0);
    this.context.lineTo(this.alley.topLeftGutter.x,0);
    this.context.lineTo(this.alley.bottomLeftGutter.x,this.alley.height);
    this.context.lineTo(0,this.alley.height);
    this.context.fillStyle = '#BFE5BB';
    this.context.fill();
  }

  this._drawLane = function() {
    this.context.beginPath();
    this.context.moveTo(this.alley.bottomLeftGutter.x,this.alley.bottomLeftGutter.y);
    this.context.lineTo(this.alley.bottomRightGutter.x,this.alley.bottomRightGutter.y);
    this.context.lineTo(this.alley.topRightGutter.x,this.alley.topRightGutter.y);
    this.context.lineTo(this.alley.topLeftGutter.x,this.alley.topLeftGutter.y);
    this.context.fillStyle = '#FFF2D1';
    this.context.fill();
  }

  this._drawRightBound = function() {
    this.context.beginPath();
    this.context.moveTo(this.alley.topRightGutter.x,0);
    this.context.lineTo(this.alley.width,0);
    this.context.lineTo(this.alley.width,this.alley.height);
    this.context.lineTo(this.alley.bottomRightGutter.x,this.alley.height);
    this.context.fillStyle = '#BFE5BB';
    this.context.fill();
  }

  this._drawThrowLine = function() {
    this.context.beginPath();
    this.context.moveTo(this.alley.leftGutter.x(this.alley.throwLine),this.alley.throwLine);
    this.context.lineTo(this.alley.rightGutter.x(this.alley.throwLine),this.alley.throwLine);
    this.context.stroke();
  }

}

module.exports = Drawer
