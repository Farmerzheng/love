export default function () {
  // 这是画布动画背景的js
  // eslint-disable-next-line camelcase
  var canvas_is = document.getElementById('canvas_is')
  // canvas_is.style.height = window.innerHeight + 'px';
  var ctx_is = canvas_is.getContext('2d')
  // 设置画布的大小
  var cw_is = (canvas_is.width = window.innerWidth)
  var cx = cw_is / 2
  var ch_is = (canvas_is.height = window.innerHeight)
  // eslint-disable-next-line camelcase
  var cy = ch_is / 2

  ctx_is.fillStyle = '#483D8B' // 这个似乎没有用？？
  var linesNum = 25 // 线条的数量
  var linesRy = [] //
  var requestId = null

  for (var i = 0; i < linesNum; i++) {
    var flag = i % 2 == 0 ? 'h' : 'v'
    var l = new Line_is(flag)
    linesRy.push(l)
  }

  setTimeout(function () {
    Init_is()
    addEventListener('resize', Init_is, false)
  }, 15)

  // 画线
  function Line_is (flag) {
    this.flag = flag
    this.a = {}
    this.b = {}

    if (flag == 'v') {
      this.a.y = 0
      this.b.y = ch_is
      this.a.x = randomIntFromInterval(0, ch_is)
      this.b.x = randomIntFromInterval(0, ch_is)
    } else if (flag == 'h') {
      this.a.x = 0
      this.b.x = cw_is
      this.a.y = randomIntFromInterval(0, cw_is)
      this.b.y = randomIntFromInterval(0, cw_is)
    }

    this.va = randomIntFromInterval(25, 100) / 100
    this.vb = randomIntFromInterval(25, 100) / 100

    this.draw = function () {
      ctx_is.strokeStyle = '#D8BFD8' // 线条的颜色
      ctx_is.beginPath()
      ctx_is.moveTo(this.a.x, this.a.y)
      ctx_is.lineTo(this.b.x, this.b.y)
      ctx_is.stroke()
    }

    this.update = function () {
      if (this.flag == 'v') {
        this.a.x += this.va
        this.b.x += this.vb
      } else if (flag == 'h') {
        this.a.y += this.va
        this.b.y += this.vb
      }
      this.edges()
    }

    this.edges = function () {
      if (this.flag == 'v') {
        if (this.a.x < 0 || this.a.x > cw_is) {
          this.va *= -1
        }
        if (this.b.x < 0 || this.b.x > cw_is) {
          this.vb *= -1
        }
      } else if (flag == 'h') {
        if (this.a.y < 0 || this.a.y > ch_is) {
          this.va *= -1
        }
        if (this.b.y < 0 || this.b.y > ch_is) {
          this.vb *= -1
        }
      }
    }
  }

  function Draw_is () {
    requestId = window.requestAnimationFrame(Draw_is)
    ctx_is.clearRect(0, 0, cw_is, ch_is)

    for (var i = 0; i < linesRy.length; i++) {
      var l = linesRy[i]
      l.draw()
      l.update()
    }
    for (var i = 0; i < linesRy.length; i++) {
      var l = linesRy[i]
      for (var j = i + 1; j < linesRy.length; j++) {
        var l1 = linesRy[j]
        Intersect2lines(l, l1)
      }
    }
  }

  function Init_is () {
    linesRy.length = 0
    for (var i = 0; i < linesNum; i++) {
      var flag = i % 2 == 0 ? 'h' : 'v'
      var l = new Line_is(flag)
      linesRy.push(l)
    }
    if (requestId) {
      window.cancelAnimationFrame(requestId)
      requestId = null
    }
    // cw_is = canvas_is.width = window.innerWidth,
    (cw_is = canvas_is.width = window.innerWidth), (cx = cw_is / 2);
    (ch_is = canvas_is.height = window.innerHeight), (cy = ch_is / 2)
    Draw_is()
  }

  function randomIntFromInterval (mn, mx) {
    return ~~(Math.random() * (mx - mn + 1) + mn)
  }

  function Intersect2lines (l1, l2) {
    var p1 = l1.a
    var p2 = l1.b
    var p3 = l2.a
    var p4 = l2.b
    var denominator =
      (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y)
    var ua =
      ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) /
      denominator
    var ub =
      ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) /
      denominator
    var x = p1.x + ua * (p2.x - p1.x)
    var y = p1.y + ua * (p2.y - p1.y)
    if (ua > 0 && ub > 0) {
      markPoint({
        x: x,
        y: y
      })
    }
  }

  // 生成相交点
  function markPoint (p) {
    ctx_is.beginPath()
    ctx_is.fillStyle = '#DDA0DD' // 相交点的颜色
    ctx_is.arc(p.x, p.y, 2, 0, 2 * Math.PI)
    ctx_is.fill()
  }
}
