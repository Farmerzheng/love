export default function () {
  class Vector {
    constructor (x = 0, y = 0) {
      this.x = parseFloat(x)
      this.y = parseFloat(y)
    }

    static add (a, b) {
      return new Vector(a.x + b.x, a.y + b.y)
    }

    static sub (a, b) {
      return new Vector(a.x - b.x, a.y - b.y)
    }

    static scale (vector, size) {
      return vector.clone().scale(size)
    }

    static random () {
      return new Vector(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      )
    }

    set (x = 0.0, y = 0.0) {
      this.x = x
      this.y = y

      return this
    }

    setX (x = 0.0) {
      this.x = x

      return this
    }

    setY (y = 0.0) {
      this.y = y

      return this
    }

    invertX () {
      this.x = -this.x

      return this
    }

    invertY () {
      this.y = -this.y

      return this
    }

    add (vector) {
      this.x += vector.x
      this.y += vector.y

      return this
    }

    sub (vector) {
      this.x -= vector.x
      this.y -= vector.y

      return this
    }

    scale (size = 1.0) {
      size = parseFloat(size)

      this.x *= size
      this.y *= size

      return this
    }

    distanceTo (vector) {
      let dx = vector.x - this.x
      let dy = vector.y - this.y

      return Math.sqrt(dx ** 2 + dy ** 2)
    }

    length () {
      return Math.sqrt(this.x ** 2 + this.y ** 2)
    }

    normalize () {
      let m = this.length()
      if (m) {
        this.x /= m
        this.y /= m
      }

      return this
    }

    angle () {
      return Math.atan2(this.y, this.x)
    }

    clone () {
      return new Vector(this.x, this.y)
    }
  }

  class Point {
    constructor (x = 0.0, y = 0.0, color = '#fff') {
      const drp = window.devicePixelRatio || 1

      this.position = new Vector(x, y)
      this.radius = 5 * drp
      this.color = color

      this.maxSpeed = 11 * drp
      this.minSpeed = 0
      this.maxAcceleration = 4 * drp
      this.friction = 0.03
      this.weight = 1 + Math.random()

      this.acceleration = new Vector()
      this.velocity = new Vector()
      this.defaultPointOfAttraction = new Vector(x, y)
    }

    update (canvas, attractionPoint, attractionPointWeight) {
      // let position = this.position
      let maxAcceleration = this.maxAcceleration
      let attraction

      if (attractionPoint) {
        attraction = this.getAttraction(attractionPoint, attractionPointWeight)
      } else {
        attraction = this.getStableAttraction(this.defaultPointOfAttraction, attractionPointWeight)
      }

      if (Math.abs(attraction.x) > maxAcceleration) {
        attraction.x = maxAcceleration * Math.sign(attraction.x)
      }

      if (Math.abs(attraction.y) > maxAcceleration) {
        attraction.y = maxAcceleration * Math.sign(attraction.y)
      }

      this.acceleration.set(
        attraction.x,
        Math.min(attraction.y, this.maxAcceleration)
      )

      if (this.position.x <= 0 || this.position.x >= canvas.width) {
        if (this.position.x < 0) {
          this.position.x = 0
        } else {
          this.position.x = canvas.width
        }

        this.velocity.invertX()
      }

      if (this.position.y <= 0 || this.position.y >= canvas.height) {
        if (this.position.y < 0) {
          this.position.y = 0
        } else {
          this.position.y = canvas.height
        }

        this.velocity.invertY()
      }

      this.velocity.add(this.acceleration)

      let speed = this.velocity.length()

      if (speed > this.minSpeed) {
        this.velocity.scale(1 - this.friction)
      }

      if (speed > this.maxSpeed) {
        this.velocity.normalize().scale(this.maxSpeed)
      }

      this.position.add(this.velocity)

      return this
    }

    getAttraction (attractionPoint, attractionPointWeight) {
      let pointPosition = this.position
      let force = (UNIVERSAL_GRAVITATIONAL_CONSTANT * this.weight * attractionPointWeight) / (attractionPoint.distanceTo(pointPosition))

      return Vector.sub(attractionPoint, pointPosition)
        .normalize()
        .scale(force)
    }

    getStableAttraction (attractionPoint) {
      let force = attractionPoint.distanceTo(this.position) ** 2 * this.weight / 2000

      return Vector.sub(attractionPoint, this.position)
        .normalize()
        .scale(force)
    }

    draw (ctx) {
      let {
        x,
        y
      } = this.position

      ctx.beginPath()
      ctx.arc(
        x, y,
        this.radius,
        0, 2 * Math.PI,
        false
      )
      ctx.fillStyle = this.color
      ctx.fill()
    }
  }

  class Scene {
    constructor (element) {
      this.element = element
      this.ctx = element.getContext('2d')
      this.dpr = window.devicePixelRatio || 1
      this.ctx.scale(this.dpr, this.dpr)
      this.isPlaying = false

      this.draw = this.draw.bind(this)
    }

    clear () {
      let element = this.element

      this.ctx.clearRect(
        0,
        0,
        element.width,
        element.height
      )
    }

    resize () {
      let element = this.element
      let {
        innerWidth,
        innerHeight
      } = window

      element.width = innerWidth * this.dpr
      element.height = innerHeight * this.dpr
      element.style.width = innerWidth + 'px'
      element.style.height = innerHeight + 'px'

      this.clear()
    }

    draw (renderer) {
      if (!this.isPlaying) {
        return
      }

      window.requestAnimationFrame(this.draw)
      renderer()
    }

    stop () {
      this.isPlaying = false
    }

    play () {
      this.isPlaying = true
      this.draw()
    }

    init () {
      this.resize()

      window.addEventListener('resize', () => {
        this.resize()
      })
    }
  }

  class ParticleScene extends Scene {
    constructor (element, count) {
      super(element)

      this.count = count

      this.points = []

      this.cursor = new Vector()

      this.cursorIsActive = false

      this.renderFrame = this.renderFrame.bind(this)
    }

    resize () {
      super.resize()
      this.points = this.emit(this.count)
    }

    emit (count = 100) {
      let points = new Array(count)

      let width = this.element.width
      let height = this.element.height
      let size = Math.min(width, height) * HEART_SIZE / 36

      for (let index = 0; index < count; index++) {
        let x = heart.x(index, size) + width / 2
        let y = heart.y(index, -size) + height / 2

        const colorIndex = parseInt((x + y) % colors.length, 10)

        points[index] = new Point(x, y, colors[colorIndex])
      }

      return points
    }

    clear () {
      let element = this.element

      this.ctx.fillStyle = BACKGROUND_COLOR
      this.ctx.fillRect(
        0, 0,
        element.width,
        element.height
      )
    }

    renderFrame () {
      this.clear()

      let points = this.points
      let cursor

      if (this.cursorIsActive) {
        cursor = this.cursor
      }

      for (let index = 0, pointsCount = points.length; index < pointsCount; index++) {
        points[index]
          .update(this.element, cursor, CURSOR_WEIGHT)
          .draw(this.ctx)
      }
    }

    draw () {
      super.draw(this.renderFrame)
    }

    init () {
      super.init()

      this.points = this.emit(this.count)

      // eslint-disable-next-line no-return-assign
      let removePoint = () => this.cursorIsActive = false
      let activateCursor = (x, y) => {
        let dpr = this.dpr

        this.cursor.set(x * dpr, y * dpr)
        this.cursorIsActive = true
      }

      this.element.addEventListener('mousemove', (e) => {
        activateCursor(e.clientX, e.clientY)
      })

      this.element.addEventListener('touchmove', (e) => {
        let touch = e.touches[0]

        e.preventDefault()

        activateCursor(touch.pageX, touch.pageY)
      })

      this.element.addEventListener('touchend', removePoint)

      this.element.addEventListener('mouseleave', removePoint)

      return this
    }
  }

  let {
    cos,
    sin
  } = Math

  const x = (t, scale) => 16 * (sin(t) ** 3) * scale
  const y = (t, scale) => ((13 * cos(t)) - (5 * cos(2 * t)) - (2 * cos(3 * t)) - cos(4 * t)) * scale

  const heart = {
    x,
    y
  }

  const colors = ['#FB6066', '#FFEFC1', '#FDD86E', '#FFA463', '#F66B40']
  const BACKGROUND_COLOR = 'rgba(0, 0, 0, 0.35)'
  const HEART_SIZE = 0.8
  const POINTS_COUNT = 1000
  const CURSOR_WEIGHT = 2000
  const UNIVERSAL_GRAVITATIONAL_CONSTANT = 6.674 * Math.pow(10, -3) // fuck physics

  const canvas = document.querySelector('canvas')
  const scene = new ParticleScene(canvas, POINTS_COUNT)

  scene.init().play()
}
