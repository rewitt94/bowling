function Gutter(coordinates) {

  this.calculateEquation = function(coordinates) {
    var changeInX = coordinates[0].x - coordinates[1].x
    var changeInY = coordinates[0].y - coordinates[1].y
    const m = changeInY / changeInX
    const c = coordinates[0].y - m * coordinates[0].x
    const x = function(y) {
      return (y - c) / m
    }
    return x
  }

  this.x = this.calculateEquation(coordinates)

}

module.exports = Gutter
