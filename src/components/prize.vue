<template lang="pug">
    .prize
        p.combination 
            span(v-for="ic in icons") 
                font-awesome-icon(:icon="ic")
        //- p.num(v-if="!!prize") {{prize}}
        p.note(v-if="!!note") {{note}}
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'Prize',
  components: {
    FontAwesomeIcon
  },
  props: {
    icons: {
      type: Array,
      default() {
        return []
      }
    },
    prize: {
      type: String,
      default: ''
    },
    note: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.prize p {
  /* width: 100%; */
  display: inline-block;
  padding: 0px 10px 0px 5px;
  font-weight: bold;
}

p.combination {
  display: inline-block;
}

.prize .num {
  text-align: right;
}

.prize p span {
  margin: 0px 3px;
}

p.note {
  color: lime;
}

@media only screen and (min-width: 600px) {
  p.combination {
    width: 40%;
  }
}
@media only screen and (max-width: 600px) {
  p.combination {
    width: 48%;
  }

  p.note {
    font-size: x-small;
    width: 52%;
  }

  .prize p {
    /* width: 100%; */
    padding: 0px 0px 0px 5px;
  }
}
</style>
