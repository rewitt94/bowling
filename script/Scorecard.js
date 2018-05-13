const Frame = require('./Frame.js')
const Printer = require('./Printer.js')

function Scorecard() {
  this.printer = new Printer

  this.frames = [];

  for (var i = 0;i < 9;i++) {
    this.frames.push(new Frame)
  }

  var tenthFrame = new Frame
  tenthFrame.makeFrameTen()
  this.frames.push(tenthFrame)

  this.currentFrame = 0;
  this.currentRoll = 0;

  this.isFinished = false;

  this.addRoll = function(score) {

    const index = this.currentFrame;
    const frame = this.frames[index];

    if (frame.isFrameTen) {
      this.addRollToTenthFrame(frame,score)

    } else {
      this.addRollToFrame(frame,score)

    }

  }

  this.addRollToFrame = function(frame,score) {

    frame.addRoll(score)

    if (frame.isStrike()) {
      frame.promiseBonuses(2)

    } else if (frame.isSpare()) {
      frame.promiseBonuses(1)

    } else if (frame.isSecondRoll()) {
      frame.setFrameTotal()

    } else if (frame.isFirstRoll()) {
      return

    }

    this.currentFrame++;

  }

  this.addRollToTenthFrame = function(frame,score) {

    if (!this.isFinished) {
      frame.addRoll(score)
    }

    if (frame.isStrike() || frame.isSpare()) {

      if (frame.rolls.length == 3) {
        frame.setFrameTotal()
        this.isFinished = true
      }

    } else {

      if (frame.rolls.length == 2) {
        frame.setFrameTotal()
        this.isFinished = true
      }

    }

  }

  this.addBonuses = function(score) {

    for (let i = 0;i < this.frames.length;i++) {

      if (this.frames[i].bonusesPromised > 0) {
        this.frames[i].addBonus(score)
      }

    }

  }

  this.update = function(score) {
    this.printer.removeScores()
    this.addBonuses(score)
    this.addRoll(score)
    this.printer.printScores(this)
  }

  this.printer.printScores(this)

}

module.exports = Scorecard
