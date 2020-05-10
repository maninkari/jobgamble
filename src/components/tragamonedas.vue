<template lang="pug">
  div
    font-awesome-icon.badges(:icon="badge" :key="index" v-for="(i, index) in lifes")

    #tm
      .topdiv
        psycodelia(ref="psyco")

      .box
        .prizes-rules
          h3 prizes
          .panel(v-if="lifes > 0 || running")
            .half1
              prize(
                v-for="(p, index) in prizes.slice(0, 4)"
                :key="index"
                :icons="p.combination"
                :prize="p.prize"
                :note="p.note"
              )
            .half2
              prize(
                v-for="(p, index) in prizes.slice(4)"
                :key="index"
                :icons="p.combination"
                :prize="p.prize"
                :note="p.note"
              )

          .panel-end(v-if="lifes == 0 && !running") 
            .game-over 
              h2 
                span.gold-icon(v-for="(i, index) in 4") 
                  font-awesome-icon(:icon="company[4-i]")
                span Game Over
                span.gold-icon(v-for="(i, index) in 4") 
                  font-awesome-icon(:icon="company[i-1]")
              button.send-button(@click="restart") insert CV
                span.cv-icon 
                  font-awesome-icon(:icon="cv")
          h3
          .c1 
            rule(v-for="(i, index) in icons.slice(0,7)"
              :key="index"
              :icon="i.icon"
              :comment="i.desc"
            )
            
          .c2
            rule(v-for="(i, index) in icons.slice(7,14)"
              :key="index"
              :icon="i.icon"
              :comment="i.desc"
            )
            
          .c3
            rule(v-for="(i, index) in icons.slice(14)"
              :key="index"
              :icon="i.icon"
              :comment="i.desc"
            )

            svg.go
              rect(x="0" y="0" rx="5" ry="5" width="40px" height="20px" v-on:click="run")
              text(x="7" y="15" v-on:click="run") Go!
          
        .group
          Reel(ref="r1" :icons="company")
          Reel(ref="r2" :icons="team")
          Reel(ref="r3" :icons="job")
          p company
          p team
          p job

      lever.leverComp(ref="lev" :f="run" :f2="done")            
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faIdBadge, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import Lever from '@/components/lever'
import Prize from '@/components/prize'
import Psycodelia from '@/components/psycodelia'
import Reel from '@/components/reel'
import Rule from '@/components/rule'

FontAwesomeIcon.config = {
  autoAddCss: false
}

export default {
  name: 'Tragamonedas',
  components: {
    FontAwesomeIcon,
    Lever,
    Prize,
    Psycodelia,
    Reel,
    Rule
  },

  transition: 'gameover',

  data() {
    return {
      badge: faIdBadge,
      cv: faMailBulk,
      timeline: null,
      sound: {
        ambience: new Audio('/casino-ambience.mp3'),
        coins: new Audio('/casino-coins.mp3'),
        arpegio: new Audio('/casino-arpegio.mp3'),
        lever: new Audio('/casino-lever.mp3'),
        hit: new Audio('/casino-hit.mp3')
      }
    }
  },

  computed: {
    ...mapGetters({
      running: 'game/getRunning',
      lifes: 'getLifes',
      icons: 'game/getIcons',
      company: 'game/getCompany',
      team: 'game/getTeam',
      job: 'game/getJob',
      prizes: 'game/getPrizes'
    })
  },

  mounted() {
    this.sound.ambience.addEventListener(
      'ended',
      function() {
        this.currentTime = 0
        this.play()
      },
      false
    )

    this.sound.ambience.play()
  },

  methods: {
    ...mapMutations({
      setLifes: 'setLifes',
      setRunning: 'game/setRunning',
      setCombination: 'game/setCombination'
    }),

    done() {
      this.setLifes(this.lifes - 1)

      let winFlag = false

      this.setCombination([
        this.$refs.r1.selectedIcon,
        this.$refs.r2.selectedIcon,
        this.$refs.r3.selectedIcon
      ])

      this.prizes.forEach((item, index) => {
        if (
          item.combination[0].iconName === this.$refs.r1.selectedIcon &&
          item.combination[1].iconName === this.$refs.r2.selectedIcon &&
          item.combination[2].iconName === this.$refs.r3.selectedIcon
        ) {
          winFlag = true

          this.$refs.r1.win()
          this.$refs.r2.win()
          this.$refs.r3.win()

          return item
        }
      })

      const _ = this

      const p = new Promise(function(resolve, reject) {
        if (winFlag) {
          _.sound.arpegio.play()
          _.sound.coins.play()
        } else {
          _.sound.hit.play()
        }

        setTimeout(
          function() {
            resolve()
          },
          winFlag ? 2500 : 0
        )
      })

      p.then(function() {
        _.setRunning(false)

        // if (_.lifes === 0) {
        //   _.$router.push('gameover')
        // }
      })
    },

    play(t) {
      this.$refs.lev.play(t)
      this.$refs.psyco.play(t)
    },

    restart() {
      this.setCombination([])
      this.setLifes(3)
    },

    run() {
      if (this.running || this.lifes === 0) return

      this.setRunning(true)
      this.setCombination([])
      this.sound.lever.play()

      this.$refs.r1.spin()
      this.$refs.r2.spin()
      this.$refs.r3.spin()

      const t = Math.max(
        this.$refs.r1.tempo,
        this.$refs.r2.tempo,
        this.$refs.r3.tempo
      )

      this.play(t)
    }
  }
}
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
a:active,
a:focus {
  outline: 0;
}

body {
  background: #ddd
    url(https://subtlepatterns.com/patterns/texturetastic_gray.png);
}

h1,
a {
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);
}

.badges {
  float: right;
  margin: 10px 10px 0px 0px;
  font-size: 32px;
  color: purple;
}

.topdiv {
  /* border-style: solid; */
  padding: 0px;
}

.topdiv svg {
  width: 100%;
  height: 100%;
}

.c1,
.c2,
.c3 {
  padding: 0px;
  display: inline-block;
  width: 33%;
  vertical-align: top;
}

.box,
.leverdiv {
  /* border-style: solid; */
  padding: 0px;
  display: inline-block;
}

.topdiv {
  height: 200px;
}

.box {
  background: rgb(238, 238, 238);
  width: 90%;
  border-radius: 50px;
  vertical-align: middle;

  background: rgb(238, 238, 238);
  background: -moz-linear-gradient(
    top,
    rgba(238, 238, 238, 1) 0%,
    rgba(204, 204, 204, 1) 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, rgba(238, 238, 238, 1)),
    color-stop(100%, rgba(204, 204, 204, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(238, 238, 238, 1) 0%,
    rgba(204, 204, 204, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(238, 238, 238, 1) 0%,
    rgba(204, 204, 204, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(238, 238, 238, 1) 0%,
    rgba(204, 204, 204, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(238, 238, 238, 1) 0%,
    rgba(204, 204, 204, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#cccccc',GradientType=0 );
}

.cv-icon {
  padding-left: 5px;
}

.panel {
  background-color: white;
  border-radius: 10px;
}

.panel-end {
  background-color: #272626;
  border-radius: 10px;
}

.prizes-rules {
  height: 340px;
  padding: 15px;
}

.prizes-rules h3 {
  padding: 15px 10px;
}

.prizes-rules .half1,
.prizes-rules .half2 {
  width: 50%;
  height: 90px;
  padding: 10px 0px;
  display: inline-block;
  vertical-align: top;
  background-color: white;
}

.half1,
.half2 {
  border-radius: 10px;
}

.game-over {
  width: 100%;
  text-align: center;
  height: 90px;
  padding: 10px 0px;
  display: inline-block;
  vertical-align: top;
}

.game-over h2 {
  color: gold;
}

.game-over .cv-icon {
  color: gold;
}

.gold-icon {
  padding: 5px;
  font-size: x-small;
}

.group {
  width: 100%;
  border-radius: 30px;
  padding: 5%;
  display: inline-block;

  background: rgb(252, 234, 187);
  background: -moz-linear-gradient(
    top,
    rgba(252, 234, 187, 1) 0%,
    rgba(252, 205, 77, 1) 50%,
    rgba(248, 181, 0, 1) 51%,
    rgba(251, 223, 147, 1) 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, rgba(252, 234, 187, 1)),
    color-stop(50%, rgba(252, 205, 77, 1)),
    color-stop(51%, rgba(248, 181, 0, 1)),
    color-stop(100%, rgba(251, 223, 147, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(252, 234, 187, 1) 0%,
    rgba(252, 205, 77, 1) 50%,
    rgba(248, 181, 0, 1) 51%,
    rgba(251, 223, 147, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(252, 234, 187, 1) 0%,
    rgba(252, 205, 77, 1) 50%,
    rgba(248, 181, 0, 1) 51%,
    rgba(251, 223, 147, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(252, 234, 187, 1) 0%,
    rgba(252, 205, 77, 1) 50%,
    rgba(248, 181, 0, 1) 51%,
    rgba(251, 223, 147, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(252, 234, 187, 1) 0%,
    rgba(252, 205, 77, 1) 50%,
    rgba(248, 181, 0, 1) 51%,
    rgba(251, 223, 147, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#fbdf93',GradientType=0 );
}

.group .reel {
  width: 31%;
}

.group p {
  width: 33%;
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
  color: darkorange;
}

.send-button {
  font-size: 18px;
  border-radius: 8px;
  padding: 3px 7px;
  margin-top: 10px;
  background-color: gray;
  border: darkslategrey;
}

@media only screen and (min-width: 600px) {
  #tm {
    /* border-style: solid; */
    width: 600px;
    margin: auto;
    padding: 5px;
  }

  .box {
    width: 90%;
  }

  .c3 svg {
    display: none;
  }
}

@media only screen and (max-width: 600px) {
  #tm {
    /* border-style: solid; */
    width: 100%;
    margin: auto;
    padding: 5px;
  }

  .box {
    width: 100%;
  }

  .group .reel {
    width: 30%;
  }

  .leverComp {
    display: none;
  }

  .badges {
    display: none;
  }

  .topdiv {
    height: 50px;
  }

  .c3 svg {
    padding: 15px 0px 0px 10px;
    height: 40px;
    width: 50px;
  }

  .go rect {
    fill: rgb(255, 50, 100);
  }

  .go text {
    fill: white;
    font-weight: bold;
  }
}
</style>
