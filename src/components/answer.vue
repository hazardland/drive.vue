<template>
    <div class='answer'
        :class='{red:($parent.clicked && !correct && index==$parent.clicked), green:($parent.clicked && correct)}'
        @click='click'
    >
        <div class='number'>{{index}}</div>
        <div class="answer-text">
            {{text}}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        index: Number,
        text: String,
        correct: Boolean
    },
    methods: {
        click () {
            if (!this.$parent.clicked) {
                this.$parent.answer(this.index)
                this.$store.commit('step', { 'step': this.correct ? 1 : -1, 'ticket': this.$parent.id })
            }
        }
    }
}
</script>

<style>
    .answer {
        cursor: pointer;
        color: #fff;
        background: linear-gradient(to right, #244e5b 0%,#031d26 50%,#244e5b 100%);
        background:#1d333a;
        padding: 1.25rem;
        display: flex;
        /*align-items: center;*/
        border: 1px solid #fff;
    }
    .number{
        color: #042f4f;
        background: #fff;
        width: 1.875rem;
        height: 1.875rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        border-radius: 5px;
        margin-right: 10px;
        margin-top: 0.4rem;
    }
    .answer-text{
        line-height: 150%;
        font-size: 1.25rem;
        width: calc(100% - 10px - 1.875rem);
    }
    .green{
        background: green!important;
    }
    .red{
        background: red!important;
    }
    @media screen and (max-width:960px){
        .number{
            width: 1.375rem;
            height: 1.375rem;

        }
          .answer-text{
            line-height: 150%;
            font-size: 1rem;
            width: calc(100% - 10px - 1.375rem);
            margin-top: 0rem;
        }
    }
</style>
