import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Toast from "components/common/toast"
import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload"

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(Toast)

FastClick.attach(document.body)

Vue.use(VueLazyLoad)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')