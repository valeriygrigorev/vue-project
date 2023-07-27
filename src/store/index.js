import { createStore } from 'vuex'
import authStore from '@/store/authStore'
import loadingStore from '@/store/loadingStore'

export default createStore({
  state: {
    //языки
    locale: 'ru-RU',
    selectedLanguage: 'RU',
    languages: [
      { code: 'ru', name: 'RU', locale: 'ru-RU' },
      { code: 'en', name: 'EN', locale: "en-EN" },
    ],
    logoutVisible: !!sessionStorage.getItem('authToken'),
    //редирект
    redirect: null,
  },
  getters: {
    selectedLanguage: state => state.selectedLanguage,
    locale: state => state.locale,
    languages: state => state.languages,
    logoutVisible: state => state.logoutVisible,
    redirect: state => state.redirect,
  },
  mutations: {
    selectedLanguage: (state, payload) => {
      state.selectedLanguage = state.languages.find(language => language.code === payload.code).name;
      state.locale = state.languages.find(language => language.code === payload.code).locale;
    },
    showLogoutVisible: state => state.logoutVisible = true,
    hideLogoutVisible: state => state.logoutVisible = false,
    setRedirect: (state, payload) => state.redirect = payload,
    clearRedirect: state => state.redirect = null,
  },
  actions: {
    changeLanguage: (context, payload) => context.commit('selectedLanguage', payload),
    logout: () => sessionStorage.removeItem('authToken'),
    showLogoutVisible: context => context.commit('showLogoutVisible'),
    hideLogoutVisible: context => context.commit('hideLogoutVisible'),
    setRedirect: context => context.commit('setRedirect'),
    clearRedirect: context => context.commit('clearRedirect'),
  },
  modules: {
    authStore,
    loadingStore
  },
})
