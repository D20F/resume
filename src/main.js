import Vue from 'vue'
import App from './App.vue'

import router from './router'
import "./util/rem.js"



import component_plugins from './components/plugins'
Vue.use(component_plugins);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
