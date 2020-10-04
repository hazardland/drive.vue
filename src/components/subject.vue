<template>
    <div class='subject'
        :class='{active:($parent.subject==id)}'
        @click='$parent.subject=id'
    >
        {{ id }}. {{ title }} ({{fails}})
    </div>
</template>

<script>
export default {
    props: {
        id: Number,
        title: String
    },
    computed: {
        fails () {
            console.log('computing')
            return this.$store.state.fails[this.id]
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
