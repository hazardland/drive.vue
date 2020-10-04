<template>
    <div class='ticket'>
        <img :src="'/images/'+id+'.jpg'" v-if='crop!=3'>
        <div class='question'>
            <span class='id'>{{ id }}:</span>
            <span class='fail' v-show='fail'>
                (ცუდად ვიცი)
            </span>
            <span class='success' v-show='success'>
                (კარგად ვიცი)
            </span>
            {{ question }}
        </div>
        <div class='answers'>
            <answer v-for='(answer, index) in answers'
                :key='index'
                :index='index+1'
                :text='answer.text'
                :correct='answer.correct'>
            </answer>
        </div>
        <div class='description' v-show='false'>
            {{ description }}
        </div>
    </div>
</template>

<script>
import Answer from '@/components/answer.vue'

export default {
    components: {
        Answer
    },
    props: {
        id: Number,
        categories: Array,
        crop: Number,
        subject: Number,
        question: String,
        answers: Array,
        description: String
    },
    data () {
        return {
            clicked: false
        }
    },
    methods: {
        random (answers) {
            return answers.sort(function () {
                return 0.5 - Math.random()
            })
        }
    },
    // mounted () {
    //     this.answers = this.random(this.answers)
    // },
    computed: {
        fail () {
            return this.$store.state.tickets[this.id] < 0
        },
        success () {
            return this.$store.state.tickets[this.id] >= 3
        }
    }
}
</script>

<style>
    .ticket{
        margin: 1px;
        padding: 1px;
        max-width: 1006px;
        margin-bottom: 30px;
    }
    .id{

    }
    .question{
        margin: 0;
        color: #222;
        color: #fff;
        padding: 10px;
        border-bottom: 3px solid #fff;
        background-color: rgba(35, 47, 54, .9);
        text-align: center;
        font-size: 24px;
        font-weight: 900;
    }
    .answers{
        display: flex!important;
        flex-wrap: wrap;
        width: 100%;
    }
</style>
