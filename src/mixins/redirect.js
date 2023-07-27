import { mapGetters } from "vuex";

const redirect = {
    computed: {
        ...mapGetters(['redirect']),
    },
    watch: {
        'redirect' (newValue) {
            if (newValue === this.$data.nextPage) {
                this.toNextPage();
            }
        },
    }
}

export { redirect }