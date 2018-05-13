function Pins() {
  this.all = [
    {
      position: {x:164,y:50},
      colour: '#0000FF'
    },
    {
      position: {x:188,y:50},
      colour: '#0000FF'
    },
    {
      position: {x:212,y:50},
      colour: '#0000FF'
    },
    {
      position: {x:236,y:50},
      colour: '#0000FF'
    },
    {
      position: {x:176,y:60},
      colour: '#7373FF'
    },
    {
      position: {x:200,y:60},
      colour: '#7373FF'
    },
    {
      position: {x:224,y:60},
      colour: '#7373FF'
    },
    {
      position: {x:188,y:70},
      colour: '#B5B5FF'
    },
    {
      position: {x:212,y:70},
      colour: '#B5B5FF'
    },
    {
      position: {x:200,y:80},
      colour: '#E5E5FF'
    }
  ]

  this.calculateRicochets = function(index) {
    toBeRemoved = []
    for (let i = 0;i < this.all.length;i++) {
      chance = (Math.random() ** 3) * 75
      distance = this.getDistance(i,index)
      if (chance >= distance) {
        toBeRemoved.push(i)
      }
    }
    return toBeRemoved
  }

  this.getDistance = function(indexOne,indexTwo) {
    xSquared = (this.all[indexOne].position.x - this.all[indexTwo].position.x) ** 2
    ySquared = (this.all[indexOne].position.y - this.all[indexTwo].position.y) ** 2
    return Math.sqrt(xSquared + ySquared)
  }

}

module.exports = Pins
