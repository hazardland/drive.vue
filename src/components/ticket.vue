<template>
    <div class='ticket' style="position:relative;">
        <div class='indicator' :class='{red:failed, green:studied, blue:learning}'>
            {{$store.state.scores[this.id]}}
        </div>
        <img :src="'./images/'+id+'.jpg'" v-if='crop!=3'>
        <div class='question' @click='info=!info'>
            <div class="question-number">
                <span class='id'>{{ id }}:</span>
            </div>
            <div class="question-text">
                {{ question }}

            </div>
        </div>
        <div class='answers'>
            <answer v-for='(answer, index) in answers'
                :key='index'
                :index='index+1'
                :text='answer.text'
                :correct='answer.correct'>
            </answer>
        </div>
        <div class='description' v-show='info'>
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
            clicked: false,
            info: false
        }
    },
    methods: {
        random (answers) {
            return answers.sort(function () {
                return 0.5 - Math.random()
            })
        },
        answer (id) {
            this.clicked = id
            this.$parent.ignore.push(this.id)
        }
    },
    // mounted () {
    //     this.answers = this.random(this.answers)
    // },
    computed: {
        failed () {
            return this.$store.state.scores[this.id] < 0
        },
        studied () {
            return this.$store.state.scores[this.id] >= 3
        },
        learning () {
            return this.$store.state.scores[this.id] !== null &&
                   this.$store.state.scores[this.id] >= 0 &&
                   this.$store.state.scores[this.id] < 3
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
        position: relative;
    }
    img{
        width:100%;
    }
    .question{
        margin: 0;
        color: #fff;
        padding: 1.25rem 1.125rem 2rem;
        background-color: rgba(35, 47, 54, .9);
        border: 2px solid white;
        border-bottom: 1px solid white;
        font-size: 1.375rem;
        line-height: 150%;
        font-weight: 600;
        cursor: pointer;
    }
    .question-number{
        text-align: center;
        margin-bottom: 0.5rem;

    }
    .answers{
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
    }
    .indicator{
        height: 1.875rem;
        width: 1.875rem;
        position: absolute;
        top:  5px;
        left: 5px;
        text-align: center;
        color: white;
        line-height: 30px;
    }
    .description{
        box-sizing: border-box;
        width: 100%;
        color: #ffffff;
        padding: 1.125rem;
        border: 1px solid white;
        font-size: 1.25rem;
        line-height: 140%;
    }
    .red{
        background-color: red;
    }
    .blue{
        background-color: blue;
    }
    .green{
        background-color: green;
    }

    @media screen and (max-width: 960px){
        .answers{
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
        }
        .question{
            padding: 1.25rem 1.125rem 2rem;
            font-size: 1rem;
            line-height: 150%;
        }
        .description{
            width: 100%;
            padding: 1rem;
            font-size: .9rem;
        }

    }
</style>
