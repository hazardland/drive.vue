import Vue from 'vue'
import Vuex from 'vuex'
// import Learn from '@/lib/learn.js'

Vue.use(Vuex)

function random (array) {
    return array.sort(function () {
        return 0.5 - Math.random()
    })
}

function reset_subjects (subjects, array) {
    for (const subject of Object.values(subjects)) {
        if (subject.id in array) {
            array[subject.id] = 0
        } else {
            Vue.set(array, subject.id, 0)
        }
    }
}

export default new Vuex.Store({
    state: {
        subject: 1,
        category: 2,
        scores: {},
        // buy subjects
        subject_total: {},
        subject_fresh: {},
        subject_failed: {},
        subject_learning: {},
        subject_studied: {},
        // sums
        total: 0,
        fresh: 0,
        failed: 0,
        studied: 0,
        learning: 0
    },
    mutations: {
        calculate (state) {
            state.total = 0
            state.fresh = 0
            state.failed = 0
            state.learning = 0
            state.studied = 0

            reset_subjects(this._vm.subjects, state.subject_total)
            reset_subjects(this._vm.subjects, state.subject_fresh)
            reset_subjects(this._vm.subjects, state.subject_failed)
            reset_subjects(this._vm.subjects, state.subject_learning)
            reset_subjects(this._vm.subjects, state.subject_studied)

            // for (const ticket of Object.values(this._vm.tickets)) {
            for (const ticket of this._vm.tickets) {
                if (!ticket.categories.includes(state.category)) {
                    continue
                }
                state.total++
                state.subject_total[ticket.subject]++
                if (state.scores[ticket.id] == null) {
                    state.fresh++
                    state.subject_fresh[ticket.subject]++
                } else if (state.scores[ticket.id] < 0) {
                    state.failed++
                    state.subject_failed[ticket.subject]++
                } else if (state.scores[ticket.id] < 3) {
                    state.learning++
                    state.subject_learning[ticket.subject]++
                } else {
                    state.studied++
                    state.subject_studied[ticket.subject]++
                }
            }
        },
        init (state) {
            console.log('initing')
            let load = {}
            if (localStorage.getItem('scores')) {
                load = JSON.parse(localStorage.getItem('scores'))
            }
            // for (const ticket of Object.values(this._vm.tickets)) {
            for (const ticket of this._vm.tickets) {
                Vue.set(state.scores, ticket.id, ticket.id in load ? load[ticket.id] : null)
                ticket.answers = random(ticket.answers)
            }
            console.log(state)
            this.commit('calculate')
        },
        step (state, payload) {
            const step = payload.step
            const ticket = payload.ticket
            console.log('Committing step ' + step + ' to ticket ' + ticket)

            if (step < 0) {
                state.scores[ticket] = -1
                console.log('ticket=-1')
            } else if (state.scores[ticket] === null) {
                state.scores[ticket] = step
            } else {
                state.scores[ticket] += step
                console.log('ticket=' + state.scores[ticket])
            }

            localStorage.setItem('scores', JSON.stringify(state.scores))
            this.commit('calculate')
        },
        category (state, id) {
            state.category = id
            this.commit('calculate')
        },
        subject (state, id) {
            state.subject = id
            this.commit('calculate')
        }
    }
})
