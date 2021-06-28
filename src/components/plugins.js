import titles from './titles.vue'
import user from './user.vue'


const plugins = {

    install: function (Vue) {
        Vue.component("titles", titles);
        Vue.component("user", user);
    }

}
export default plugins;