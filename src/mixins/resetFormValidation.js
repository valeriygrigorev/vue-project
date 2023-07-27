import { mapGetters } from "vuex";

const resetFormValidation = {
    computed: {
        ...mapGetters(['selectedLanguage']),
    },
    watch: {
        'selectedLanguage'(newValue, oldValue) {
            if (newValue !== oldValue) {
                this.$refs[this.$data.refName].resetValidation();
            }
        }
    }
}

export { resetFormValidation }