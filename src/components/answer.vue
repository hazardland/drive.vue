<template>
    <div class='answer'
        :class='{red:($parent.clicked && !correct && index==$parent.clicked), green:($parent.clicked && correct)}'
        @click='click'
    >
        <div class='number'>{{index}}</div> {{text}}
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
        width: 456px;
        padding: 20px;
        display: flex;
        align-items: center;
        font-size: 23px!important;
        font-weight: 900;
        border: 3px solid #fff!important;
    }
    .number{
        color: #042f4f;
        background: #fff;
        padding: 5px 10px;
        margin-right: 20px;
        border-radius: 10px;
    }
    .green{
        background: green!important;
    }
    .red{
        background: red!important;
    }
</style>
