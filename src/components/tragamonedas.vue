<template lang="pug">
  div
    #tm
      .topdiv
        svg
          rect(x="240" y="10" rx="10px" ry="10px" width="50" height="60" fill="red")
          
          path(d="M50,200 C50,10 480,10 480,200" fill="lightblue" class="psyco")

          g(class="psyco")
            path(
              v-for="i in 20" 
              :d="'M' + (60 + 10*i) + ',' + (220-5*i) + ' C' + (60 + 10*i) + ',' + (25 + 5*i) + ' ' + (470-10*i) + ',' + (25 + 5*i) + ' '+(470-10*i)+','+(220-5*i)" 
              :fill="(i%2)?'purple':'white'"
              :class="{'purple':(i%2), 'white':!(i%2)}")
      .box
        .prizes-rules
          h3 prizes

          .panel
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
          
      .leverdiv
        svg.lever
          rect(x="0" y="210" rx="10px" ry="10px" width="50" height="90" fill="grey")
          line(x1="30" y1="20" x2="25" y2="230" style="stroke:rgb(30,30,30);stroke-width:7")
          circle(cx="30" cy="25" r="20" stroke="ruby" stroke-width="4" fill="red" v-on:click="run")
            
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { TimelineMax } from 'gsap'
import {
  faBiohazard,
  faBrain,
  faGem,
  faHandHoldingUsd,
  faHatWizard,
  faHeart,
  faHouseDamage,
  faJedi,
  faLeaf,
  faMask,
  faMedal,
  faMinus,
  faPeace,
  faPooStorm,
  faPray,
  faRadiation,
  faSave,
  faSpaceShuttle,
  faSkullCrossbones,
  faUserAstronaut
} from '@fortawesome/free-solid-svg-icons'
import Prize from '@/components/prize'
import Reel from '@/components/reel'
import Rule from '@/components/rule'

FontAwesomeIcon.config = {
  autoAddCss: false
}

export default {
  name: 'Tragamonedas',
  components: {
    FontAwesomeIcon,
    Prize,
    Reel,
    Rule
  },

  data() {
    return {
      dash: faMinus,
      icons: [
        { icon: faBrain, desc: 'brain' },
        { icon: faGem, desc: 'diamond' },
        { icon: faMask, desc: 'double-faced' },
        { icon: faLeaf, desc: 'eco' },
        { icon: faSkullCrossbones, desc: 'evil' },
        { icon: faPeace, desc: 'good' },
        { icon: faSpaceShuttle, desc: 'high tech' },
        { icon: faUserAstronaut, desc: 'highly skilled' },
        { icon: faHouseDamage, desc: 'home damage' },
        { icon: faJedi, desc: 'jedi' },
        { icon: faSave, desc: 'legacy' },
        { icon: faHeart, desc: 'love' },
        { icon: faHandHoldingUsd, desc: 'money' },
        { icon: faRadiation, desc: 'poluter' },
        { icon: faPooStorm, desc: 'shit storm' },
        { icon: faMedal, desc: 'recognition' },
        { icon: faPray, desc: 'suffer' },
        { icon: faBiohazard, desc: 'toxic' },
        { icon: faHatWizard, desc: 'wizard' }
      ],
      company: [
        faGem,
        faHeart,
        faMedal,
        faHandHoldingUsd,
        faPeace,
        faSpaceShuttle,
        faLeaf,
        faPooStorm,
        faRadiation,
        faSkullCrossbones
      ],
      team: [
        faGem,
        faHeart,
        faMedal,
        faHandHoldingUsd,
        faHatWizard,
        faUserAstronaut,
        faJedi,
        faPooStorm,
        faMask,
        faBiohazard
      ],
      job: [
        faGem,
        faHeart,
        faMedal,
        faHandHoldingUsd,
        faBrain,
        faUserAstronaut,
        faSave,
        faPooStorm,
        faPray,
        faHouseDamage
      ],
      prizes: [
        {
          combination: [faGem, faGem, faGem],
          prize: "1'000'000",
          note: 'WIN WIN WIN'
        },
        {
          combination: [faHeart, faHeart, faHeart],
          prize: "729'000",
          note: 'WIN WIN WIN'
        },
        {
          combination: [faMedal, faMedal, faMedal],
          prize: "512'000",
          note: 'WIN WIN'
        },
        {
          combination: [faHandHoldingUsd, faHandHoldingUsd, faHandHoldingUsd],
          prize: "512'000",
          note: 'WIN'
        },
        {
          combination: [faPeace, faHatWizard, faBrain],
          prize: "512'000",
          note: 'WIN WIN'
        },
        {
          combination: [faSpaceShuttle, faUserAstronaut, faUserAstronaut],
          prize: "512'000",
          note: 'WIN WIN'
        },
        {
          combination: [faLeaf, faJedi, faBrain],
          prize: "512'000",
          note: 'WIN WIN'
        }
      ]
    }
  },

  mounted() {},

  methods: {
    run() {
      this.$refs.r1.spin()
      this.$refs.r2.spin()
      this.$refs.r3.spin()

      const t = Math.max(
        this.$refs.r1.tempo,
        this.$refs.r2.tempo,
        this.$refs.r3.tempo
      )

      const purples = document.getElementsByClassName('purple')
      const lever = document.getElementsByClassName('lever')
      const timeline = new TimelineMax()

      timeline
        .to(lever[0].children[2], 0.25, {
          cy: 70
        })
        .to(lever[0].children[2], 0.5, {
          cy: 25
        })
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
          purples,
          t,
          {
            fill: 'lavender'
          },
          0
        )
        .to(purples, 0.25, {
          fill: 'purple'
        })
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
.leverdiv {
  width: 10%;
  height: 400px;
  vertical-align: middle;
}
.lever {
  height: 100%;
}

.panel {
  background-color: white;
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
  color: orange;
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

  .leverdiv {
    display: none;
  }

  .group .reel {
    width: 30%;
  }

  .topdiv {
    height: 50px;
  }

  .psyco {
    display: none;
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
