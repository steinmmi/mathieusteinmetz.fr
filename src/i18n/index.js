import fr from "./fr";
import en from "./en";
import VueI18n from "vue-i18n";
import Vue from 'vue'

Vue.use(VueI18n)

const messages = {
    fr,
    en
};

export default new VueI18n({
    locale: 'en',
    messages
});
