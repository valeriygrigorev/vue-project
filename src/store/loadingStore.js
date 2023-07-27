export default {
    state: {
        loading: false,
    },
    getters: {
        loading: state => state.loading,
    },
    mutations: {
        showLoader: state => state.loading = true,
        hideLoader: state => state.loading = false,
    },
    actions: {
        showLoader: context => context.commit('showLoader'),
        hideLoader: context => context.commit('hideLoader'),
    },
    modules: {}
}