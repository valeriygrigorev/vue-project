import axios from 'axios'
import store from "@/store";

const http = options => {
    let params = {};
    for (let key in options.requestParams) {
        key !== 'url'
            ? params[key] = options.requestParams[key]
            : params[key] = `${process.env.VUE_APP_API_URL}${options.requestParams.url}`
    }
    store.dispatch('showLoader');
    axios
        .request(params)
        .then(options.resolve ? options.resolve : () => {})
        .catch(options.error ? options.error : () => {})
        .finally(() => {
            (options.final ? options.final : () => {})();
            store.dispatch('hideLoader')
        })
}

export { http, axios }