<template>

    <div style='width:100%;background:white;display:inline-block;border:0.5px solid black; z-index: 99999'
    :class='{sticky:sticky}'>
        <div style='float:left;height:10px;background:red;width:0%' :style='{width:failed_percent}'></div>
        <div style='float:left;height:10px;background:blue;width:0%' :style='{width:learning_percent}'></div>
        <div style='float:left;height:10px;background:green;width:0%' :style='{width:studied_percent}'></div>
    </div>

</template>

<script>
export default {
    props: {
        total: Number,
        learning: Number,
        studied: Number,
        failed: Number,
        sticky: { type: Boolean, default: false }
    },
    computed: {
        learning_percent () {
            return parseInt((100 / this.total) * this.learning) + '%'
        },
        studied_percent () {
            return parseInt((100 / this.total) * this.studied) + '%'
        },
        failed_percent () {
            return parseInt((100 / this.total) * this.failed) + '%'
        }
    }
}
</script>

<style>

.sticky {
  position: fixed;
  width: 80%;
  max-width: 1600px;
  top: 0;
  left: 0;
  /*margin-left:-8px;*/
}
@media screen and (max-width:960px){
    .sticky{
        width: 100%;

    }
}

</style>
