import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'ii', // set locale
    fallbackLocale: 'ii',
    messages: {}, // set locale messages
    silentTranslationWarn: true
})


axios.get('/api/translations/en?group=client').then(
    messages => {
        i18n.setLocaleMessage('en', messages.data)
        i18n.locale = 'en'
    }
)

export default i18n
