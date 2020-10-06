<template>
    <div class='home'>
        <Progress
            :total='subject_total'
            :failed='subject_failed'
            :learning='subject_learning'
            :studied='subject_studied'
            :sticky='true'
        >
        </Progress>
        <div style='margin-top:10px;display:inline-block'>
            <div class='status'>
                {{ count }}/{{subject_total}} ბილეთი
            </div>
            <div class='status' @click='mode("all")' :class='{active:show=="all"}'>
                ყველა: {{subject_total}}
            </div>
            <div class='status' @click='mode("failed")' :class='{active:show=="failed"}'>
                რაშიც ჩავიჭერი: {{subject_failed}}
            </div>
            <div class='status' @click='mode("learning")' :class='{active:show=="learning"}'>
                რასაც ვსწავლობ: {{subject_learning}}
            </div>
            <div class='status' @click='mode("fresh")' :class='{active:show=="fresh"}'>
                რაც ახალია: {{subject_fresh}}
            </div>
            <timer ref="timer"></timer>
        </div>
        <div class='categories'>
            <category
                v-for='category in categories'
                :key='category.id'
                :id='category.id'
                :title='category.title'
            >
            </category>
        </div>
        <div class='tickets'>
            <ticket v-for='ticket in filter()'
                :key='ticket.id'
                :id='ticket.id'
                :categories='ticket.categories'
                :subject='ticket.subject'
                :question='ticket.question'
                :crop='ticket.crop'
                :answers='ticket.answers'
                :description='ticket.description'
            >
            </ticket>
        </div>
        <div class='subjects'>
            <subject
                v-for='subject in subjects'
                :key='subject.id'
                :id='subject.id'
                :title='subject.title'
            >
            </subject>
        </div>
    </div>
</template>

<script>
import Ticket from '@/components/ticket.vue'
import Subject from '@/components/subject.vue'
import Category from '@/components/category.vue'
import Progress from '@/components/progress.vue'
import Timer from '@/components/timer.vue'

export default {
    name: 'Home',
    components: {
        Ticket,
        Subject,
        Category,
        Progress,
        Timer
    },
    methods: {
        filter () {
            const result = []
            let count = 0
            // for (const ticket of Object.values(this.tickets)) {
            for (const ticket of this.tickets) {
                let match = true
                if (!this.ignore.includes(ticket.id)) {
                    if (ticket.subject !== this.subject) {
                        match = false
                    }
                    if (!ticket.categories.includes(this.category)) {
                        match = false
                    }
                    if (match && this.show !== 'all') {
                        const score = this.$store.state.scores[ticket.id]

                        if (score === null) {
                            if (this.show !== 'fresh') {
                                match = false
                            }
                        } else {
                            if (this.show === 'fresh') {
                                if (this.score !== null) {
                                    match = false
                                }
                            } if (this.show === 'failed') {
                                if (score >= 0) {
                                    match = false
                                }
                            } else if (this.show === 'learning') {
                                if (score >= 3) {
                                    match = false
                                }
                            } else if (this.show === 'studied') {
                                if (score <= 3) {
                                    match = false
                                }
                            }
                        }
                    }
                }

                if (match) {
                    result.push(ticket)
                    count++
                }
            }
            this.count = count
            return result
            // return result.sort(function () {
            //     return 0.5 - Math.random()
            // })
        },
        mode (show) {
            this.reset()
            this.show = show
        },
        reset () {
            this.ignore = []
            this.$refs.timer.reset()
        }
    },
    data () {
        return {
            count: 0,
            show: 'all', // fresh, failed, learning, studied
            ignore: []
        }
    },
    computed: {
        category () {
            return this.$store.state.category
        },
        subject () {
            return this.$store.state.subject
        },
        subject_failed () {
            return this.$store.state.subject_failed[this.subject]
        },
        subject_studied () {
            return this.$store.state.subject_studied[this.subject]
        },
        subject_learning () {
            return this.$store.state.subject_learning[this.subject]
        },
        subject_fresh () {
            return this.$store.state.subject_fresh[this.subject]
        },
        subject_total () {
            return this.$store.state.subject_total[this.subject]
        }

    }
}

</script>

<style>
    .status{
        cursor: pointer;
        background: darkgrey;
        border: 1px solid grey;
        margin: 1px;
        padding: 6px;
        display: inline-block;
    }
    .categories {
    }
    .tickets {
        float: left;
    }
    .subjects {
        max-width: 200px;
        float:left;
    }
</style>
