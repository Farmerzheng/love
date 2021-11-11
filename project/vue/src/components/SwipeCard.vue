<template>
  <div class="demo">
    <div class="demo__content">
      <div class="demo__card-cont">
        <div class="demo__card" v-for="(item, index) in cardList" :key="index">
          <div class="demo__card__top purple">
            <div class="demo__card__img"></div>
            <p class="demo__card__name">Hungry cat 1</p>
          </div>
          <div class="demo__card__btm">
            <p class="demo__card__we">{{ item }}</p>
          </div>
          <div class="demo__card__choice m--reject"></div>
          <div class="demo__card__choice m--like"></div>
          <div class="demo__card__drag"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      cardList: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
    }
  },
  mounted () {
    var me = this
    var animating = false
    var cardsCounter = 0
    var numOfCards = 10
    var decisionVal = 80
    var pullDeltaX = 0
    var deg = 0
    var $card, $cardReject, $cardLike

    function pullChange () {
      animating = true
      deg = pullDeltaX / 10
      $card.css(
        'transform',
        'translateX(' + pullDeltaX + 'px) rotate(' + deg + 'deg)'
      )

      var opacity = pullDeltaX / 100
      var rejectOpacity = opacity >= 0 ? 0 : Math.abs(opacity)
      var likeOpacity = opacity <= 0 ? 0 : opacity
      $cardReject.css('opacity', rejectOpacity)
      $cardLike.css('opacity', likeOpacity)
    }

    function release () {
      if (pullDeltaX >= decisionVal) {
        $card.addClass('to-right')
      } else if (pullDeltaX <= -decisionVal) {
        $card.addClass('to-left')
      }

      if (Math.abs(pullDeltaX) >= decisionVal) {
        $card.addClass('inactive')

        setTimeout(function () {
          $card.addClass('below').removeClass('inactive to-left to-right')
          cardsCounter++
          if (cardsCounter === numOfCards) {
            cardsCounter = 0
            me.$('.demo__card').removeClass('below')
          }
        }, 300)
      }

      if (Math.abs(pullDeltaX) < decisionVal) {
        $card.addClass('reset')
      }

      setTimeout(function () {
        $card
          .attr('style', '')
          .removeClass('reset')
          .find('.demo__card__choice')
          .attr('style', '')

        pullDeltaX = 0
        animating = false
      }, 500)
    }

    me.$(document).on(
      'mousedown touchstart',
      '.demo__card:not(.inactive)',
      function (e) {
        if (animating) return

        $card = me.$(this)
        $cardReject = me.$('.demo__card__choice.m--reject', $card)
        $cardLike = me.$('.demo__card__choice.m--like', $card)
        var startX = e.pageX || e.originalEvent.touches[0].pageX

        me.$(document).on('mousemove touchmove', function (e) {
          var x = e.pageX || e.originalEvent.touches[0].pageX
          pullDeltaX = x - startX
          if (!pullDeltaX) return
          pullChange()
        })

        me.$(document).on('mouseup touchend', function () {
          me.$(document).off('mousemove touchmove mouseup touchend')
          if (!pullDeltaX) return // prevents from rapid click events
          release()
        })
      }
    )
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-size: 62.5%;
}

body {
  background: #63bdf7;
  overflow: hidden;
}

.demo {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  /* margin-left: -15.3rem; */
  /* margin-top: -27rem; */
  background: #f1f1f1;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.8);
}

.demo__header {
  /* height: 6rem;
        background: #002942; */
}

.demo__content {
  overflow: hidden;
  position: relative;
  height: 82vh;
  width: 84vw;
  margin-top: 4vh;
  margin-left: 8vw;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  box-shadow: 1px 1px 20px #999;
}

.demo__card-cont {
  /* position: relative;
        width: 24rem;
        height: 32rem; */
  margin: 0 auto 5rem;
}

.demo__card {
  /* background-color: red; */
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-transform-origin: 50% 100%;
  -ms-transform-origin: 50% 100%;
  transform-origin: 50% 100%;
  overflow: hidden;
  background-size: 60%;
  background-position: center;
  background-repeat: no-repeat;
  background-color:#fff
}

.demo__card.reset {
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  -webkit-transform: translateX(0) !important;
  -ms-transform: translateX(0) !important;
  transform: translateX(0) !important;
}

.demo__card.reset .demo__card__choice {
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
  opacity: 0 !important;
}

.demo__card.inactive {
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
}

.demo__card.to-left {
  -webkit-transform: translateX(-30rem) rotate(-30deg) !important;
  -ms-transform: translateX(-30rem) rotate(-30deg) !important;
  transform: translateX(-30rem) rotate(-30deg) !important;
}

.demo__card.to-right {
  -webkit-transform: translate(30rem) rotate(30deg) !important;
  -ms-transform: translate(30rem) rotate(30deg) !important;
  transform: translate(30rem) rotate(30deg) !important;
}

.demo__card.below {
  z-index: 1;
}

.demo__card__top {
  height: 20.5rem;
  padding-top: 4rem;
}

.demo__card:nth-child(1) {
  background-image: url(../assets/img/11/1.gif);
}

.demo__card:nth-child(2) {
  background-image: url(../assets/img/11/13.gif);
}

.demo__card:nth-child(3) {
  background-image: url(../assets/img/11/3.gif);
}

.demo__card:nth-child(4) {
  background-image: url(../assets/img/11/4.gif);
}

.demo__card:nth-child(5) {
  background-image: url(../assets/img/11/5.gif);
}

.demo__card:nth-child(6) {
  background-image: url(../assets/img/11/6.gif);
}

.demo__card:nth-child(7) {
  background-image: url(../assets/img/11/7.gif);
}

.demo__card:nth-child(8) {
  background-image: url(../assets/img/11/12.gif);
}

.demo__card:nth-child(9) {
  background-image: url(../assets/img/11/9.gif);
}

.demo__card:nth-child(10) {
  background-image: url(../assets/img/11/10.gif);
}
/* .demo__card__top.blue {
        background: #248cb6;
    }

    .demo__card__top.indigo {
        background: #303f9f;
    }

    .demo__card__top.cyan {
        background: #26c6da;
    }

    .demo__card__top.lime {
        background: #afb42b;
    }

    .demo__card__top.brown {
        background: #795548;
    }
     */

.demo__card__img {
  display: none;
  overflow: hidden;
  width: 10rem;
  height: 10rem;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  border: 0.5rem solid #fff;
  /* background-image: url("http://i.imgur.com/udTln22.png"); */
  background-size: contain;
}

.demo__card__name {
  display: none;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
}

.demo__card__btm {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  background: #f8f8f8;
}

.demo__card__we {
  text-align: center;
  font-size: 1.8rem;
  line-height: 4rem;
  color: #666;
}

.demo__card__choice {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.demo__card__choice:before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 2rem;
  height: 2rem;
  margin-left: -1rem;
  color: #fff;
  border-radius: 50%;
  box-shadow: -2rem -3rem #fff, 2rem -3rem #fff;
}

.demo__card__choice:after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 4rem;
  height: 1.5rem;
  margin-left: -2rem;
  border: 0.6rem solid #fff;
  border-bottom: none;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
}

.demo__card__choice.m--reject {
  background: #ff945a;
}

.demo__card__choice.m--like {
  background: #b1da96;
}

.demo__card__choice.m--like:after {
  -webkit-transform: scaleY(-1);
  -ms-transform: scaleY(-1);
  transform: scaleY(-1);
}

.demo__card__drag {
  z-index: 5;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: -webkit-grab;
  cursor: grab;
}

.demo__tip {
  text-align: center;
  font-size: 2.2rem;
}
</style>
