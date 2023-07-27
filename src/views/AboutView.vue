<template>
          <v-sheet class="bg-deep-purple pa-12" rounded>
            <v-card class="mx-auto px-6 py-8" max-width="360">
              <v-list-item>
                <template v-slot:prepend>
                  <v-avatar >
                    <v-img
                        :src="avatar"
                        alt="avatar-image"
                        class="avatar-border"
                        @error="imgUrl"
                    >
                    </v-img>
                  </v-avatar>
                </template>
                <v-list-item-title class="list-item-title text-h6">
                  {{ userName }}
                </v-list-item-title>
              </v-list-item>
              <v-card-text class=" text-h5 text-start">
                <div class="card-text">{{ about }}</div>
              </v-card-text>
            </v-card>
          </v-sheet>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    aboutInfo: null,
    loading: false,
  }),
  computed: {
    ...mapGetters(['userName', 'about']),
    avatar() {
      return this.$store.state.authStore.avatar;
    },
  },
  mounted: function() {
    this.$store.dispatch('aboutInfo');
  },
  methods: {
    imgUrl() {
      this.$store.dispatch('setDefaultAvatar');
    },
    logout() {
      this.$router.push('/login');
      this.$store.dispatch('logout');
    }
  },
}
</script>

<style>
@import '~vuetify/dist/vuetify.min.css';

body {
  margin: 0;
}

.card-text {
  line-height: 1.75rem;
}

.list-item-title {
  text-align: left;
}

.avatar-border {
  border-style: solid;
  border-width: 1px;
  border-radius: 50%;
}
</style>