<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn text v-bind="props">
        {{ selectedLanguage }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="language in languages" :key="language.code" @click="changeLanguage(language.code)">
        <v-list-item-title>{{ language.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(['selectedLanguage', "languages"]),
  },
  methods: {
    changeLanguage(code) {
      this.$store.dispatch("changeLanguage", { code });
    },
  },
}
</script>