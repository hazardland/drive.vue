<template>
    <iframe
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        :width="width"
        :height="height"
        type="text/html"
        :src="'https://www.youtube.com/embed/'+id+'?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start='+start+'&end='+end">
    </iframe>

</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        width: {
            type: Number,
            default: 1008
        },
        height: {
            type: Number,
            default: 567
        },
        start: {
            type: Number,
            default: 0
        },
        end: {
            type: Number,
            default: 0
        }
    }
}
</script>
