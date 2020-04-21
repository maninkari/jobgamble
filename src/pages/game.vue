<template lang="pug">
    main
      tragamonedas
</template>

<script>
import Tragamonedas from '@/components/tragamonedas'

export default {
  name: 'Game',
  components: {
    Tragamonedas
  },

  data() {
    return {}
  }
}
</script>
<style scoped>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
