<template>
        <v-sheet>
          <v-card class="mx-auto px-6 py-8" max-width="360">
            <v-form
                v-model="form"
                @submit.prevent="onSubmit"
                ref="loginForm"
            >
              <v-card-title class="text-h5 mb-3">
                {{tl('Sign In Form')}}
              </v-card-title>
              <v-text-field
                  v-model="username"
                  :readonly="loading"
                  :rules="[required]"
                  class="mb-2"
                  :label="tl('Username')"
                  :placeholder="tl('Enter your username')"
              ></v-text-field>
              <v-text-field
                  v-model="password"
                  :readonly="loading"
                  :rules="[required]"
                  :label="tl('Password')"
                  :placeholder="tl('Enter your password')"
              ></v-text-field>
              <br>
              <v-btn
                  :disabled="!form"
                  block
                  color="success"
                  size="large"
                  type="submit"
                  variant="elevated"
              >
                {{tl('Send')}}
              </v-btn>
              <v-btn
                  block
                  color="success"
                  size="large"
                  variant="elevated"
                  class="mt-5"
              >
                <router-link
                    to="/register"
                    class="text-decoration-none">
                  {{tl('No account')}}?
                </router-link>
              </v-btn>
            </v-form>
          </v-card>
        </v-sheet>

</template>

<script>
import { mapGetters } from 'vuex';
import { resetFormValidation } from '@/mixins/resetFormValidation';
import { redirect } from '@/mixins/redirect';

export default {
  mixins: [resetFormValidation, redirect],
  data: () => ({
    form: false,
    username: null,
    password: null,
    //для mixin redirect
    nextPage: 'about',
    //для mixin resetFormValidation
    refName: 'loginForm'
  }),
  computed: {
    ...mapGetters(['loading']),
  },
  methods: {
    onSubmit() {
      if (!this.form) return;

      let payload = {};
      payload.username = this.username;
      payload.password = this.password;
      this.$store.dispatch('login', payload);
      this.$store.dispatch('showLogout');
    },
    required(v) {
      return !!v || this.tl('Field is required')
    },
    toNextPage() {
      this.$router.push('/');
      this.$store.dispatch('clearRedirect');
    },
  },
}
</script>

<style scoped>
@import '~vuetify/dist/vuetify.min.css';

body {
  margin: 0;
}

button {
  position: relative;
}

.v-btn__content a {
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 3rem;
  border-radius: 0.25rem;
  color: rgb(var(--v-theme-on-success)) !important;
}
</style>