<template>
    <div class='category'
        :class='{active:($parent.category==id)}'
        @click='click'
    >
        {{ id }}. {{ title }}
    </div>
</template>

<script>
export default {
    props: {
        id: Number,
        title: String
    },
    methods: {
        click () {
            this.$parent.reset()
            this.$store.commit('category', this.id)
        }
    }

}
</script>

<style>
    .category {
        cursor: pointer;
        background: lightgrey;
        border: 1px solid grey;
        margin: 1px;
        padding: 6px;
        display: inline-block;
    }
    .active {
        background: #FFFF66!important;
    }
    @media screen and (max-width:960px){
        .categories{
            display:grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

</style>
