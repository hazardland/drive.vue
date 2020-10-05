import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import tickets from '@/data/tickets.json'
import categories from '@/data/categories.json'
import subjects from '@/data/subjects.json'
// import Learn from '@/lib/learn'

Vue.config.productionTip = false

Vue.prototype.tickets = tickets
Vue.prototype.subjects = subjects
Vue.prototype.categories = categories
// Vue.prototype.learn = new Learn()

new Vue({
    router,
    store,
    beforeCreate () {
        this.$store.commit('init')
    },
    render: h => h(App)
}).$mount('#app')
