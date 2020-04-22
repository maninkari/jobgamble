<template lang="pug">
  svg
    rect(x="240" y="10" rx="10px" ry="10px" width="50" height="60" fill="red")
    
    path(d="M50,200 C50,10 480,10 480,200" fill="lightblue" class="psyco glass")

    g(class="psyco")
      path(
        v-for="i in 20" 
        :d="'M' + (60 + 10*i) + ',' + (220-5*i) + ' C' + (60 + 10*i) + ',' + (25 + 5*i) + ' ' + (470-10*i) + ',' + (25 + 5*i) + ' '+(470-10*i)+','+(220-5*i)" 
        :fill="(i%2)?'purple':'white'"
        :class="{'purple':(i%2), 'white':!(i%2)}"
      )
</template>

<script>
import { TimelineMax, Bounce } from 'gsap'

export default {
  name: 'Psycodelia',
  props: {},

  data() {
    return {
      timeline: {}
    }
  },

  methods: {
    play(t) {
      const purples = document.getElementsByClassName('purple')
      const glass = document.getElementsByClassName('glass')

      this.timeline = new TimelineMax({
        paused: true,
        onComplete: this.done
      })

      this.timeline
        .to(
          purples,
          t,
          {
            attr: { fill: 'lavender' },
            ease: Bounce.easeInOut
          },
          0
        )
        .to(purples, 0.25, {
          attr: { fill: 'purple' },
          ease: Bounce.easeInOut
        })
        .to(
          glass,
          0,
          {
            attr: { fill: '#dbeef0' }
          },
          0
        )
        .to(
          glass,
          0,
          {
            attr: { fill: 'lightblue' }
          },
          t
        )

      this.timeline.play()
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .psyco {
    display: none;
  }
}
</style>
