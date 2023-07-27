<template>
  <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      absolute
      bottom
      color="deep-purple-accent-4"
  ></v-progress-linear>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['loading']),
  },
}
</script>
