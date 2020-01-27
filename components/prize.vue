<template lang="pug">
    .prize
        p       
            span(v-for="ic in icons") 
                font-awesome-icon(:icon="ic")
        p {{prize}}
        p {{comment}}
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
    comment: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.prize p {
  width: 120px;
  display: inline-block;
  padding: 0px 10px 0px 5px;
}

.prize p span {
  margin: 0px 3px;
}
</style>
