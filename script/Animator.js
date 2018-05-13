function Animator(canvasId,animatable,drawer) {
  this.canvas = document.getElementById(canvasId)
  this.context = this.canvas.getContext('2d')
  this.ballColour = 'black'
  this.drawer = drawer
  this.animatable = animatable
  this.lastFrame = null

  this.setSize = function() {
    this.canvas.width = 400
    this.canvas.height = 600
  }

  this.clearCanvas = function() {
    this.context.clearRect(0,0,400,600);
  }

  this.updateCanvas = function(delta) {
    this.clearCanvas()
    this.animatable.update(delta)
    this.drawer.drawBowlingAlley()
    this.drawer.drawAnimatable(this.animatable)
  }

  this.animate = (now) => {
    requestAnimationFrame(this.animate)
    if (this.lastFrame === null) this.lastFrame = now;
    const delta = now - this.lastFrame;
    this.updateCanvas(delta);
    this.lastFrame = now;
  }

}

module.exports = Animator
