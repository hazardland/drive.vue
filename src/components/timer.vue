<template>
    <span style='padding-left:5px;color:white'>{{display}}</span>
</template>

<script>
export default {
  data () {
    return {
      elapsedTime: 0,
      timer: undefined
    }
  },
  computed: {
    display () {
      const date = new Date(null)
      date.setSeconds(this.elapsedTime / 1000)
      const utc = date.toUTCString()
      return utc.substr(utc.indexOf(':') - 2, 8)
    }
  },
  methods: {
    start () {
      this.timer = setInterval(() => {
        this.elapsedTime += 1000
      }, 1000)
    },
    stop () {
      clearInterval(this.timer)
    },
    reset () {
      this.elapsedTime = 0
    }
  },
  created () {
    this.start()
  }
}
</script>
