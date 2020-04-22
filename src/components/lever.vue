<template lang="pug">
  .leverdiv
    svg.lever
      rect(x="0" y="210" rx="10px" ry="10px" width="50" height="90" fill="grey")
      line(x1="30" y1="20" x2="25" y2="230" style="stroke:rgb(30,30,30);stroke-width:7")
      circle(cx="30" cy="25" r="20" stroke="ruby" stroke-width="4" fill="red" v-on:click="f")
      circle(cx="35" cy="17" r="5" stroke="ruby" stroke-width="4" fill="white" v-on:click="f")
</template>

<script>
import { TimelineMax } from 'gsap'

export default {
  name: 'Lever',
  props: {
    f: {
      type: Function,
      default() {
        return {}
      }
    },
    f2: {
      type: Function,
      default() {
        return {}
      }
    }
  },

  data() {
    return {
      timeline: {}
    }
  },

  methods: {
    play(t) {
      const lever = document.getElementsByClassName('lever')

      this.timeline = new TimelineMax({
        paused: true,
        onComplete: this.f2
      })

      this.timeline
        .to(lever[0].children[2], 0.25, {
          attr: { cy: 70 }
        })
        .to(lever[0].children[2], 0.5, {
          attr: { cy: 25 }
        })
        .to(
          lever[0].children[3],
          0.25,
          {
            attr: { cy: 62 }
          },
          0
        )
        .to(
          lever[0].children[3],
          0.5,
          {
            attr: { cy: 17 }
          },
          0.25
        )
        .to(
          lever[0].children[1],
          0.25,
          {
            attr: { y1: 60 }
          },
          0
        )
        .to(
          lever[0].children[1],
          0.5,
          {
            attr: { y1: 20 }
          },
          0.25
        )
        .to(
          lever[0].children[1],
          t - 0.75,
          {
            attr: { y1: 20 }
          },
          0.75
        )

      this.timeline.play()
    }
  }
}
</script>

<style scoped>
.leverdiv {
  width: 10%;
  height: 400px;
  vertical-align: middle;
}
.lever {
  height: 100%;
}
</style>
