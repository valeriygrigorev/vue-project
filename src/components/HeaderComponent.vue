<template>
  <v-app-bar elevation="1">
     <template v-slot:prepend>
       <v-app-bar-title class="ml-2">{{tl('Test task')}}</v-app-bar-title>
     </template>
     <template v-slot:append>
        <LanguageComponent></LanguageComponent>
        <v-btn @click="logout" v-show="isAuthenticated">{{tl('Logout')}}</v-btn>
     </template>
     <ProgressLinear></ProgressLinear>
   </v-app-bar>
</template>

<script>
import LanguageComponent from '@/components/LanguageComponent';
import ProgressLinear from '@/components/ProgressLinear';
import { mapGetters } from "vuex";

export default {
  methods: {
    logout() {
      this.$router.push('/login');
      this.$store.dispatch('logout');
      this.$store.dispatch('hideLogout');
    },
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
  components: {
    LanguageComponent,
    ProgressLinear
  }
}
</script>
