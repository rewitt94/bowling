function Alley(width,height,Gutter) {
  this.width = width
  this.height = height
  this.throwLine = 500;
  this.bottomLeftGutter = {x:this.width/5,y:this.height}
  this.bottomRightGutter = {x:4*this.width/5,y:this.height}
  this.topLeftGutter = {x:3*this.width/8,y:0}
  this.topRightGutter = {x:5*this.width/8,y:0}
  this.leftGutter = new Gutter([this.bottomLeftGutter,this.topLeftGutter])
  this.rightGutter = new Gutter([this.bottomRightGutter,this.topRightGutter])

  this.outOfLane = function(point) {
    if (point.x < this.leftGutter.x(point.y) || point.x > this.rightGutter.x(point.y)) {
      return true
    }
    return false
  }

}

module.exports = Alley
