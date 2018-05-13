const Gutter = require('./Gutter')
const Alley = require('./Alley')

const BowlingBall = require('./BowlingBall')

const Explosion = require('./Explosion')
const Pins = require('./Pins')

const Animatable = require('./Animatable')

const Drawer = require('./Drawer')
const Animator = require('./Animator')

const Scorecard = require('./Scorecard')
const Bowler = require('./Bowler')

alley = new Alley(400,600,Gutter)
animatable = new Animatable(alley,Pins,Explosion,BowlingBall)
animatable.newPins()
drawer = new Drawer(alley)
animator = new Animator('canvas',animatable,drawer)
bowler = new Bowler(animatable,Scorecard)

animator.drawer.setContext(animator.context)
animator.canvas.addEventListener('mousedown',bowler.startThrow)
animator.canvas.addEventListener('mouseup',bowler.endThrow)
animator.setSize()

animator.animate(animator)
