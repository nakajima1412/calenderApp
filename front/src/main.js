import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import vueTextAutsize from 'vue-textarea-autosize'

Vue.use(vueTextAutsize)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
