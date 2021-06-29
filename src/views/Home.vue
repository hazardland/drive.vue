<template>
    <div class='home'>
        <a href="javascript:void(0)" class="category-mobile" @click="menu=!menu">
            <svg
                enable-background="new 0 0 32 32" height="32px" id="svg2" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg"><g id="background"><rect fill="none" height="32" width="32"/></g><g id="category"><polygon points="20,20 20,12 12,12 12,14 8,14 8,10 10,10 10,2 2,2 2,10 6,10 6,26 12,26 12,30 20,30 20,22 12,22 12,24.001 8,24    8,16 12,16 12,20  "/></g>
            </svg>
        </a>
        <Progress
            :total='subject_total'
            :failed='subject_failed'
            :learning='subject_learning'
            :studied='subject_studied'
            :sticky='true'
        >
        </Progress>
        <modal :visible='!greeted'></modal>
        <div class="status-holder">
            <div class='status'>
                {{ count }}/{{subject_total}} ბილეთი
            </div>
            <div class='status' @click='mode("all")' :class='{active:show=="all"}'>
                ყველა: {{subject_total}}
            </div>
            <div class='status' @click='mode("failed")' :class='{active:show=="failed"}'>
                ჩავიჭერი: {{subject_failed}} <div class='red square'></div>
            </div>
            <div class='status' @click='mode("learning")' :class='{active:show=="learning"}'>
                ვსწავლობ: {{subject_learning}} <div class='blue square'></div>
            </div>
            <div class='status' @click='mode("fresh")' :class='{active:show=="fresh"}'>
                ახალია: {{subject_fresh}} <div class='square'></div>
            </div>
            <timer ref="timer" class="my-timer"></timer>
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
        <section class="main-content">
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
            <div class='subjects' :class="{on: menu}">
                <subject
                    v-for='subject in subjects'
                    :key='subject.id'
                    :id='subject.id'
                    :title='subject.title'
                >
                </subject>
            </div>
        </section>

    </div>
</template>

<script>
import Ticket from '@/components/ticket.vue'
import Subject from '@/components/subject.vue'
import Category from '@/components/category.vue'
import Progress from '@/components/progress.vue'
import Timer from '@/components/timer.vue'
import Modal from '@/components/modal.vue'

export default {
    name: 'Home',
    components: {
        Ticket,
        Subject,
        Category,
        Progress,
        Timer,
        Modal
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
            this.menu = false
        }
    },
    data () {
        return {
            count: 0,
            show: 'all', // fresh, failed, learning, studied
            ignore: [],
            menu: false
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
        },
        greeted () {
            return this.$store.state.greeted
        }
    }
}

</script>

<style lang="scss">
    .status-holder{
        margin-top: 15px;
        display: inline-block;
        width: 100%;
        position:relative;
    }
    .status{
        cursor: pointer;
        background: #E8E8E8;
        background: #D3D3D3;
        border: 1px solid grey;
        margin: 1px;
        padding: 6px;
        display: inline-block;
        font-size: 1rem;
    }
    .categories {
    }
    .main-content{
        display:flex;
    }
    .tickets {
        display: flex;
        flex-direction: column;
    }
    .subjects {
        max-width: 200px;
        float:left;
        div{
            margin-top:10px;

        }
    }
    .square{
        width:15px;
        height:15px;
        background:white;
        display:inline-block;
        vertical-align:middle;
        margin-top:-3px;
        border:1px solid black;
    }
    .blue {
        background-color: blue
    }
    .my-timer{
        display:flex;
        align-items:center;
        justify-content:center;
        position:absolute;
        right:0;
        top:0;
        font-size:1.2rem;
    }
    .category-mobile{
        display:none;
    }
    @media screen and (max-width:960px){
        .category-mobile{
            position:absolute;
            top: 22px;
            right: 15px;
            display: flex;
            align-items:center;
            justify-content:center;
            width: 30px!important;
            height: 30px!important;
            // margin-left:auto!important;
            background: #3a3b3c;
            padding:0!important;
            svg{
                fill:white;
                width: 22px;
                height: 24px;
                margin-left: 4px;

            }
        }
        .home{
            width: 100%;
            margin-left:auto;
            margin-right:auto;

        }
        .status-holder{
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .my-timer{
            display:flex;
            align-items:center;
            justify-content:center;
            position:relative;
            right:auto;
            top:auto;
            font-size:1rem;
        }
        .subjects{
            box-sizing: border-box;
            background: #101010;
            position:fixed;
            right: 15px;
            top: 1rem;
            overflow-x:scroll;
            width: calc(100% - 30px);
            height:100vh;
            max-width:none;
            transform: translateX(-100vw);
        }
        .subjects.on{
            transform: translateX(0);
        }
    }
</style>
