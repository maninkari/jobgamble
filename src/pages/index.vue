<template lang="pug">
  .container
    .badge
      h1
        nuxt-link(
          to="game" 
          v-for="(i, index) in 3"
          :key="index" 
          style="padding:5px"
        ) 
          font-awesome-icon(:icon="badge")
      h2.subtitle The Job Gamble
      p Where Dreams Come True
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faIdBadge } from '@fortawesome/free-solid-svg-icons'
export default {
  components: { FontAwesomeIcon },

  data() {
    return {
      badge: faIdBadge
    }
  }
}
</script>

<style scoped>
.badge {
  font-size: 48px;
  color: cadetblue;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: black;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

p {
  color: gray;
  font-size: 14px;
}
</style>
