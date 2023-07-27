import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Vue-toastification
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const vuetify = createVuetify({
    components,
    directives,
})

import { translate } from '@/utils/locales/locale'

const app = createApp(App)
    .use(vuetify)
    .use(store)
    .use(router)
    .use(Toast)

app.config.globalProperties.tl = translate;

app.mount('#app')









