<template>
  <div>
    {{ hello }}
  </div>
</template>

<script lang='ts'>

import Vue from 'vue'

export default Vue.extend({
  
  data: () => ({
    hello: 'empty'
  })

, mounted () {
    this.hello = this.$store.get('hello')
  }
})
</script>