import Vue from 'vue'
import Vuex from 'vuex'
// import Learn from '@/lib/learn.js'

Vue.use(Vuex)

function random (answers) {
    return answers.sort(function () {
        return 0.5 - Math.random()
    })
}

export default new Vuex.Store({
    state: {
        tickets: {},
        success: {},
        fails: {}
    },
    mutations: {
        init (state) {
            console.log('initing')
            console.log(this._vm.tickets[666])
            for (const ticket of Object.values(this._vm.tickets)) {
                Vue.set(state.tickets, ticket.id, 0)
                ticket.answers = random(ticket.answers)
            }
            for (const subject of Object.values(this._vm.subjects)) {
                Vue.set(state.fails, subject.id, 0)
                Vue.set(state.success, subject.id, 0)
            }
            console.log(state)
        },
        step (state, payload) {
            const step = payload.step
            const ticket = payload.ticket
            console.log('Committing step ' + step + ' to ticket ' + ticket)
            const subject = this._vm.tickets[ticket].subject
            const score = state.tickets[ticket]

            // ნებისმიერ შეცდომაზე ბილეთი ფუჭდება
            if (step < 0) {
                state.tickets[ticket] = -1
                console.log('ticket=-1')
            // წარმატების შემთხვევაში ქულა ემატება
            } else {
                state.tickets[ticket] += step
                console.log('ticket=' + state.tickets[ticket])
            }
            // ბოლო 3 ჯერ ვუპასუხეთ სწორად ზედიზედ
            if (state.tickets[ticket] === 3 && step > 0) {
                console.log(ticket + ': ბოლო 3 ჯერ ვუპასუხეთ სწორად ზედიზედ success++')
                state.success[subject]++
            }
            // კარგად ვიცოდით მაგრამ შეგვეშალა
            if (score >= 3 && step < 0) {
                console.log(ticket + ': კარგად ვიცოდით მაგრამ შეგვეშალა success--')
                state.success[subject]--
            }
            // შეგვეშალა
            if (state.tickets[ticket] === -1 && score >= 0) {
                console.log(ticket + ': შეგვეშალა fail++')
                state.fails[subject]++
            }
            // ვისწავლეთ და ადრე შეცდომით გვქონდა
            if (state.tickets[ticket] === 0 && step > 0) {
                console.log(ticket + ': ვისწავლეთ და ადრე შეცდომით გვქონდა fail--')
                state.fails[subject]--
            }

            console.log(state.fails)
        }
    }
})
