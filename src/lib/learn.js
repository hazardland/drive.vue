class Learn {
    constructor () {
        this.data = null
        this.app = null
    }

    init (app, data = null) {
        this.app = app
        this.data = data
        console.log('incoming data')
        console.log(this.data)
        if (!this.data) {
            this.data = {
                tickets: {},
                success: {},
                fails: {}
            }
            console.log('initing data')
        }
        for (const subject of Object.values(this.app.subjects)) {
            if (!(subject.id in this.data.tickets)) {
                this.data.tickets[subject.id] = {}
            }
            if (!(subject.id in this.data.fails)) {
                this.data.fails[subject.id] = 0
            }
            if (!(subject.id in this.data.success)) {
                this.data.success[subject.id] = 0
            }
        }
        console.log(this.data)
    }

    step (ticket, step) {
        console.log(ticket)
        const subject = this.app.tickets[ticket].subject
        if (!(ticket in this.data.tickets[subject])) {
            this.data.tickets[subject][ticket] = step
            if (step < 0) {
                this.data.fails[subject]++
            }
        } else {
            this.data.tickets[subject][ticket] += step
            if (step > 0) {
                if (this.data.tickets[subject][ticket] === 0) {
                    this.data.fails[subject]--
                } else if (this.data.tickets[subject][ticket]) {
                    this.data.success[subject]++
                }
            }
        }
        console.log(this.data)
    }

    fail (ticket) {
        this.step(ticket, -1)
        console.log(this.data.fails)
    }

    success (ticket) {
        this.step(ticket, 1)
    }
}

export default Learn
