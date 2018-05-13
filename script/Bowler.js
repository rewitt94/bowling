function Bowler(animatable,Scorecard) {
  this.startingCoordinates = null;
  this.animatable = animatable;
  this.startPins = null;
  this.endPins = null;
  this.firstRoll = true;
  this.scorecard = new Scorecard

  this.startThrow = (event) => {
    coordinates = this._getCoordinatesFromEvent(event)
    if (coordinates.y > 500 && !this.onTimeout) {
      this.startingCoordinates = coordinates
    }
  }

  this.endThrow = (event) => {
    coordinates = this._getCoordinatesFromEvent(event)
    if (coordinates.y < 500 && this.animatable.ball == null && !this.onTimeout) {
      var coordinatesOne = this.startingCoordinates
      var coordinatesTwo = coordinates
      this.animatable.newBall([coordinatesOne,coordinatesTwo])
      this.startPins = this.animatable.pins.all.length
    }
  }

  this._getCoordinatesFromEvent = function(event) {
    var x = event.pageX - window.innerWidth / 10
    var y = event.pageY - 50
    return {x: x,y: y}
  }

  this.newGame = function() {
    this.scorecard.printer.removeScores()
    this.animatable.newPins()
    this.scorecard = new Scorecard
  }

  // This is a React-type solution (i.e. passing a function in the props).
  // I should probably be solving this using a Promise.

  this.animatable.countPins = (pins) => {
    this.endPins = pins
    var score = this.startPins - this.endPins;
    if (score == 10) {
      this.firstRoll = true
      this.onTimeout = true
      setTimeout(() => {this.animatable.newPins();this.onTimeout = false}, 1500)
    } else if (!this.firstRoll) {
      this.firstRoll = true
      this.onTimeout = true
      setTimeout(() => {this.animatable.newPins();this.onTimeout = false}, 1500)
    } else {
      this.firstRoll = false
    }

    this.scorecard.update(score)
  }

  this.scorecard.resetPinsOnStrike = () => {
    this.onTimeout = true
    this.firstRoll = true
    setTimeout(() => {this.animatable.newPins();this.onTimeout = false}, 1500)
  }

  this.addScore = function(score) {
    this.scorecard.update(score)
  }

}

module.exports = Bowler
