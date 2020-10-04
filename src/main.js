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
    created () {
        this.$store.commit('init')
        this.$store.commit('step', { 'step': -1, 'ticket': 666 })

        // console.log(this.tickets[666])
        // this.learn.init(this)
        // this.learn.fail(666)
        // console.log(this.learn.data.tickets)
        // console.log(this.learn.data.fails)
        // console.log(this.learn.data.success)
    },
    render: h => h(App)
}).$mount('#app')
