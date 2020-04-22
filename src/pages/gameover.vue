<template lang="pug">
    .container
      .game-over 
        h2 
          span.gold-icon(v-for="(i, index) in 4") 
            font-awesome-icon(:icon="company[4-i]")
          span Game Over
          span.gold-icon(v-for="(i, index) in 4") 
            font-awesome-icon(:icon="company[i-1]")
        button.send-button(@click="restart") send CV
          span.cv-icon 
            font-awesome-icon(:icon="cv")
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'GameOver',
  components: { FontAwesomeIcon },

  data() {
    return {
      cv: faMailBulk
    }
  },
  computed: {
    ...mapGetters({
      company: 'game/getCompany'
    })
  },
  methods: {
    ...mapMutations({
      setLifes: 'setLifes'
    }),

    restart() {
      this.setLifes(3)
      this.$router.push('game')
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #272626;
}

.send-button {
  font-size: 18px;
  border-radius: 8px;
  padding: 3px 7px;
  margin-top: 10px;
  background-color: gray;
  border: darkslategrey;
}

.cv-icon {
  padding-left: 5px;
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
</style>
