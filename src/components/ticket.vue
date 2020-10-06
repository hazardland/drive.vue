<template>
    <div class='ticket' style="position:relative;">
        <div class='indicator' :class='{red:failed, green:studied, blue:learning}'>
            {{$store.state.scores[this.id]}}
        </div>
        <img :src="'./images/'+id+'.jpg'" v-if='crop!=3'>
        <div class='question' @click='info=!info'>
            <div>
                <span class='id'>{{ id }}:</span>
            </div>
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
    .id{

    }
    .question{
        margin: 0;
        color: #222;
        color: #fff;
        padding: 10px;
        background-color: rgba(35, 47, 54, .9);
        border: 3px solid white;
        border-bottom: 1px solid white;
        text-align: center;
        font-size: 24px;
        font-weight: 900;
        cursor: pointer;
    }
    .answers{
        display: flex!important;
        flex-wrap: wrap;
        width: 100%;
    }
    .indicator{
        height:30px;
        width:30px;
        position:absolute;
        top:5px;
        left:5px;
        text-align: center;
        color: white;
        line-height: 30px;
    }
    .description{
        color:silver;
        width: 982px;
        padding: 10px;
        border: 2px solid white;
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
</style>
