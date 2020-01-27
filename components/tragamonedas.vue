<template lang="pug">
    #sm
        .prizes-rules
          h2 prizes
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
            :icons="[company[4], team[4], asterisk]"
            prize="$150000"
            comment="yeeee!"
          )

          br
          h2 rules
          br
          rule(
            :icon="company[3]"
            comment="the comany is currently going through a shit-storm"
          )
        
        .group.lever
            button(v-on:click="run") Start
        .group
            Reel(ref="r1" :icons="company")
            Reel(ref="r2" :icons="team")
            Reel(ref="r3" :icons="job")
        .group
          p COMPANY
          p TEAM
          p JOB

</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
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
  faStarOfLife
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
      asterisk: faStarOfLife,
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

h1 {
  text-align: center;
  margin-top: 20px;
  font-size: 1.75em;
  font-weight: normal;
  color: #bbb;
}

h1,
a {
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);
}

#sm {
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

  width: 600px;
  margin: auto;
  padding: 20px;
  border-radius: 50px;
}

#sm,
.lever button {
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.25);
}
.group,
.reel,
.lever {
  display: inline-block;
}
.group,
.lever {
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

.prizes-rules {
  height: 300px;
  margin-top: 30px;
}

.group {
  border-radius: 30px;
  padding: 20px 0 20px 20px;
}

.group p {
  width: 120px;
  display: inline-block;
  text-align: center;
  padding: 0px 10px 0px 5px;
}

.lever {
  float: right;
  padding-right: 20px;
}
.lever button {
  text-align: center;
  border-radius: 10px;
  line-height: 100px;
  width: 100px;
  border: none;
  font-size: 1.8em;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  background: rgb(252, 255, 244);
  background: -moz-linear-gradient(
    top,
    rgba(252, 255, 244, 1) 0%,
    rgba(233, 233, 206, 1) 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, rgba(252, 255, 244, 1)),
    color-stop(100%, rgba(233, 233, 206, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(252, 255, 244, 1) 0%,
    rgba(233, 233, 206, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(252, 255, 244, 1) 0%,
    rgba(233, 233, 206, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(252, 255, 244, 1) 0%,
    rgba(233, 233, 206, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(252, 255, 244, 1) 0%,
    rgba(233, 233, 206, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fcfff4', endColorstr='#e9e9ce',GradientType=0 );
}
.lever button:active {
  color: #900;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  margin: 2px 0 -2px;
}
</style>
