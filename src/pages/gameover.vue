<template lang="pug">
    .container
      div  
        h1 Game Over
        h2
          button(@click="restart") send CV
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'GameOver',
  components: {},

  data() {
    return {}
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
}
</style>
