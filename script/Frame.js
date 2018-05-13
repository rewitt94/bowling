function Frame() {

  this.rolls = [];
  this.bonuses = [];
  this.bonusesPromised = 0;
  this.total = 0;
  this.isComplete = false;
  this.isFrameTen = false;

  this.addRoll = function(score) {
    this.rolls.push(score)
  }

  this.isStrike = function() {
    return this.rolls[0] == 10
  }

  this.isSpare = function() {
    return this.rolls[0] + this.rolls[1] == 10
  }

  this.isFirstRoll = function() {
    return this.rolls.length == 1
  }

  this.isSecondRoll = function() {
    return this.rolls.length == 2
  }

  this.addBonus = function(score) {
    this.bonuses.push(score);

    this.bonusesPromised--;
    if (this.bonusesPromised == 0) {
      this.setFrameTotal()
    }
  }

  this.promiseBonuses = function(number) {
    this.bonusesPromised += number
  }

  this.makeFrameTen = function() {
    this.isFrameTen = true
  }

  this.setFrameTotal = function() {
    this.total = this.totalRolls()
    if (this.bonuses.length > 0) {
      this.total += this._totalBonuses();
    }
    this.isComplete = true;
  }

  this.totalRolls = function() {
    return this.rolls.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    })
  }

  this._totalBonuses = function() {
    return this.bonuses.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    })
  }

}

module.exports = Frame
