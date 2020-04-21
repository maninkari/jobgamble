<template lang="pug">
    .reel(:ref="id")
        p 
          font-awesome-icon(:icon="icons[icons.length-1]")
        p(v-for="ic in icons") 
          font-awesome-icon(:icon="ic")
        p(v-for="ic in icons") 
          font-awesome-icon(:icon="ic")
</template>

<script>
import { TimelineMax } from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'Reel',

  components: { FontAwesomeIcon },

  props: {
    icons: {
      type: Array,
      default() {
        return []
      }
    }
  },

  data() {
    return {
      id: '',
      scrollTopPrv: 0,
      scrollTopVal: 0,
      scrollTopMax: 0,
      selectedIconInd: 0,
      t: 0,
      tempo: 0,
      tl: null,
      speed: Math.random() + 0.5
    }
  },

  mounted() {
    this.id = this._uid
    this.scrollTopMax = this.icons.length * 100 * 2
  },

  methods: {
    spin() {
      this.t = 2 + Math.random()
      this.selectedIconInd = Math.ceil(Math.random() * this.icons.length)
      this.scrollTopPrv = this.scrollTopVal
      this.scrollTopVal = 100 * this.selectedIconInd

      // eslint-disable-next-line
      console.log(this.selectedIconInd)

      const r = this.scrollTopMax - this.scrollTopPrv + this.scrollTopVal
      const t1 = (this.t * (this.scrollTopMax - this.scrollTopPrv)) / r
      const t2 = (this.t * this.scrollTopVal) / r

      const reel = this.$refs[this.id]

      this.tempo = t1 + t2 * 2

      this.tl = new TimelineMax()
      this.tl
        .to(reel, t1, {
          scrollTop: this.scrollTopMax
        })
        .fromTo(
          reel,
          t2 * 2,
          {
            scrollTop: 0
          },
          {
            scrollTop: this.scrollTopVal
          }
        )
    },
    win() {
      this.tl = new TimelineMax({ paused: true })
      this.tl.fromTo(
        this.$refs[this.id],
        0.1,
        { className: 'reel' },
        {
          className: 'reel reelwin',
          repeat: 5,
          yoyo: true,
          repeatDelay: 0.15
        }
      )

      this.tl.play()
    }
  }
}
</script>

<style scoped>
.reel {
  background: #fff;
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(241, 241, 241, 1) 50%,
    rgba(225, 225, 225, 1) 51%,
    rgba(246, 246, 246, 1) 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, rgba(255, 255, 255, 1)),
    color-stop(50%, rgba(241, 241, 241, 1)),
    color-stop(51%, rgba(225, 225, 225, 1)),
    color-stop(100%, rgba(246, 246, 246, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(241, 241, 241, 1) 50%,
    rgba(225, 225, 225, 1) 51%,
    rgba(246, 246, 246, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(241, 241, 241, 1) 50%,
    rgba(225, 225, 225, 1) 51%,
    rgba(246, 246, 246, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(241, 241, 241, 1) 50%,
    rgba(225, 225, 225, 1) 51%,
    rgba(246, 246, 246, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(241, 241, 241, 1) 50%,
    rgba(225, 225, 225, 1) 51%,
    rgba(246, 246, 246, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f6f6f6',GradientType=0 );

  text-align: center;
  float: left;
  padding: 0 10px;
  height: 100px;
  overflow: hidden;
  margin: 0px 5px;
  border-radius: 10px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3) inset,
    0 0px 1px rgba(0, 0, 0, 0.2) inset;
}

.reelwin {
  background: #fff;
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(241, 241, 241, 1) 50%,
    rgba(225, 225, 225, 1) 51%,
    rgba(246, 246, 246, 1) 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, rgba(255, 255, 255, 1)),
    color-stop(50%, rgba(241, 241, 241, 1)),
    color-stop(51%, rgba(225, 225, 225, 1)),
    color-stop(100%, rgba(246, 246, 246, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(241, 241, 241, 1) 50%,
    rgba(225, 225, 225, 1) 51%,
    rgba(246, 246, 246, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(241, 241, 241, 1) 50%,
    rgba(225, 225, 225, 1) 51%,
    rgba(246, 246, 246, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(241, 241, 241, 1) 50%,
    rgba(225, 225, 225, 1) 51%,
    rgba(246, 246, 246, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgb(170, 205, 240) 0%,
    rgb(247, 88, 225) 50%,
    rgb(233, 27, 27) 51%,
    rgb(170, 200, 240) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f6f6f6',GradientType=0 );

  text-align: center;
  float: left;
  padding: 0 10px;
  height: 100px;
  overflow: hidden;
  margin: 0px 5px;
  border-radius: 10px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3) inset,
    0 0px 1px rgba(0, 0, 0, 0.2) inset;
}

.reel div {
  position: relative;
  top: -48px;
}
.reel p {
  font-size: 40px;
}
.reel p {
  font-weight: bold;
  height: 100px;
  padding: 20% 0;
}
</style>
