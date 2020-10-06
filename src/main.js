import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import tickets from '@/data/tickets.json'
import categories from '@/data/categories.json'
import subjects from '@/data/subjects.json'
// import Learn from '@/lib/learn'

Vue.config.productionTip = false

function shuffle (object) {
    const keys = Object.keys(object).sort(a => 0.5 - Math.random())
    const result = []
    for (const index of keys) {
        result.push(object[index])
    }
    return result
}

Vue.prototype.tickets = shuffle(tickets)
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
