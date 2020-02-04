<template lang="pug">
    .prize
        p       
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
  width: 130px;
  display: inline-block;
  padding: 0px 10px 0px 5px;
  font-weight: bold;
}

.prize .num {
  text-align: right;
}

.prize p span {
  margin: 0px 3px;
}
</style>
