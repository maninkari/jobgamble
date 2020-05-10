<template lang="pug">
  .rule(:class="[inCombination() ? 'selected' : '']")
    p.col
      span
        font-awesome-icon(:icon="icon")
    p.comment {{comment}}
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { mapGetters } from 'vuex'

export default {
  name: 'Rule',
  components: { FontAwesomeIcon },
  props: {
    icon: {
      type: Object,
      default() {
        return {}
      }
    },
    comment: {
      type: String,
      default() {
        return {}
      }
    }
  },

  data() {
    return {}
  },

  computed: {
    ...mapGetters({
      combination: 'game/getCombination'
    })
  },

  methods: {
    inCombination() {
      for (let i = 0; i < this.combination.length; i++) {
        if (this.icon.iconName === this.combination[i]) {
          return true
        }
      }

      return false
    }
  }
}
</script>

<style scoped>
.rule p {
  display: inline-block;
  padding: 0px 10px 0px 5px;
}

p.col {
  width: 20%;
}

p.comment {
  width: auto;
  font-size: small;
}

.rule p span {
  margin: 0px 3px;
}

.selected .comment {
  color: grey;
  background-color: aliceblue;
}

@media only screen and (max-width: 600px) {
  p.comment {
    font-size: x-small;
  }
}
</style>
