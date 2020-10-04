<template>
    <div class='subject'
        :class='{active:($parent.subject==id)}'
        @click='click'
    >
        {{ id }}. {{ title }}
        <div style='font-size:12px'>
          ({{fresh}} /
          <span style='color:red'>{{failed}}</span> /
          <span style='color:blue'>{{learning}}</span> /
          <span style='color:green'>{{studied}}</span> /
          {{total}})
        </div>
        <Progress
            :total='total'
            :failed='failed'
            :learning='learning'
            :studied='studied'
            >
        </Progress>
    </div>
</template>

<script>
import Progress from '@/components/progress.vue'

export default {
    components: {
        Progress
    },
    props: {
        id: Number,
        title: String
    },
    computed: {
        failed () {
            return this.$store.state.subject_failed[this.id]
        },
        studied () {
            return this.$store.state.subject_studied[this.id]
        },
        learning () {
            return this.$store.state.subject_learning[this.id]
        },
        fresh () {
            return this.$store.state.subject_fresh[this.id]
        },
        total () {
            return this.$store.state.subject_total[this.id]
        }
    },
    methods: {
        click () {
            this.$store.commit('subject', this.id)
        }
    }
}
</script>

<style>
    .subject {
        cursor: pointer;
        background: lightgrey;
        border: 1px solid grey;
        margin: 1px;
        padding: 6px;
        width: 100%;
        display: inline-block;
    }
    .active {
        background: yellow!important;
    }

</style>
