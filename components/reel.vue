<template lang="pug">
    .reel(:ref="id")
        p {{icons[icons.length-1]}}
        p(v-for="ic in icons") {{ic}}
        p(v-for="ic in icons") {{ic}}
</template>
<script>
import { TimelineMax } from 'gsap'

export default {
  name: 'Reel',
  data() {
    return {
      id: '',
      scrollTopPrv: 0,
      scrollTopVal: 0,
      scrollTopMax: 0,
      t: 0,
      tl: null,
      speed: Math.random() + 0.5,
      r: (((Math.random() * 3) | 0) * 210) / 3,
      icons: [
        'cereza',
        'triple 7',
        'tragamonedas',
        'trebol',
        '2222',
        '333',
        '444'
      ]
    }
  },

  mounted() {
    this.id = this._uid
    this.scrollTopMax = this.icons.length * 100 * 2
  },

  methods: {
    spin() {
      this.t = 2 + Math.random()

      this.scrollTopPrv = this.scrollTopVal
      this.scrollTopVal = 100 * Math.floor(Math.random() * this.icons.length)

      const r = this.scrollTopMax - this.scrollTopPrv + this.scrollTopVal
      const t1 = (this.t * (this.scrollTopMax - this.scrollTopPrv)) / r
      const t2 = (this.t * this.scrollTopVal) / r

      const reel = this.$refs[this.id]

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
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin-right: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3) inset,
    0 0px 1px rgba(0, 0, 0, 0.2) inset;
}
.reel div {
  position: relative;
  top: -48px;
}
.reel p {
  font-weight: bold;
  height: 100px;
  padding: 50% 0;
}
.reel p:nth-child(1) {
  color: #c60;
}
.reel p:nth-child(2) {
  color: #690;
}
.reel p:nth-child(3) {
  color: #630;
}
</style>
