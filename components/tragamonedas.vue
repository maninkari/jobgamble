<template lang="pug">
  div
    #tm
      .topdiv
        svg
          rect(x="240" y="10" rx="10px" ry="10px" width="50" height="60" fill="red")
          
          path(d="M50,200 C50,10 480,10 480,200" fill="lightblue")

          g
            path(
              v-for="i in 20" 
              :d="'M' + (60 + 10*i) + ',' + (220-5*i) + ' C' + (60 + 10*i) + ',' + (25 + 5*i) + ' ' + (470-10*i) + ',' + (25 + 5*i) + ' '+(470-10*i)+','+(220-5*i)" 
              :fill="(i%2)?'purple':'white'"
              :class="{'purple':(i%2), 'white':!(i%2)}")
      .box
        .prizes-rules
          h3 prizes
          br
          prize(
            :icons="[company[0], team[0], job[0]]"
            prize="$200000"
            comment="yeeee!"
          )

          prize(
            :icons="[company[1], team[1], job[1]]"
            prize="$150000"
            comment="yeeee!"
          )

          prize(
            :icons="[company[2], team[2], job[2]]"
            prize="$150000"
            comment="yeeee!"
          )

          prize(
            :icons="[company[3], team[3], job[3]]"
            prize="$150000"
            comment="yeeee!"
          )

          prize(
            :icons="[company[4], team[4], dash]"
            prize="$150000"
            comment="yeeee!"
          )

          br
          h3 rules
          br
          rule(
            :icon="company[3]"
            comment="the company is currently going through a shit-storm"
          )
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
          line(x1="30" y1="20" x2="25" y2="210" style="stroke:rgb(30,30,30);stroke-width:7")
          circle(cx="30" cy="25" r="20" stroke="ruby" stroke-width="4" fill="red" v-on:click="run")
            
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { TimelineMax, Bounce } from 'gsap'
import {
  faGem,
  faHeart,
  faRadiationAlt,
  faPooStorm,
  faMask,
  faHatWizard,
  faJedi,
  faUserAstronaut,
  faSave,
  faDollarSign,
  faHouseDamage,
  faBrain,
  faMedal,
  faMinus
} from '@fortawesome/free-solid-svg-icons'
import Reel from '@/components/reel'
import Prize from '@/components/prize'
import Rule from '@/components/rule'

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
      company: [
        faGem,
        faHeart,
        faRadiationAlt,
        faPooStorm,
        faMedal,
        faMedal,
        faDollarSign
      ],
      team: [
        faGem,
        faHeart,
        faPooStorm,
        faMask,
        faMedal,
        faHatWizard,
        faJedi,
        faUserAstronaut
      ],
      job: [faGem, faHeart, faPooStorm, faMedal, faSave, faHouseDamage, faBrain]
    }
  },

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
      const tl = new TimelineMax()

      tl.to(purples, t, {
        fill: 'lavender',
        ease: Bounce.easeInOut
      }).to(purples, 0.5, {
        fill: 'purple',
        ease: Bounce.easeInOut
      })
    }
  }
}
</script>

<style scoped>
body,
div,
h1,
button,
p {
  margin: 0;
  padding: 0;
}
button {
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
}
a:active,
a:focus {
  outline: 0;
}
/* } */

body,
input,
select,
textarea {
  font: 18px/18px 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
body {
  background: #ddd
    url(https://subtlepatterns.com/patterns/texturetastic_gray.png);
}

h1,
a {
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);
}

#tm {
  /* border-style: solid; */
  width: 600px;
  margin: auto;
  padding: 5px;
}

.topdiv {
  /* border-style: solid; */
  padding: 0px;
}

.topdiv svg {
  width: 100%;
  height: 100%;
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

.prizes-rules {
  height: 300px;
  padding: 20px;
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
</style>
