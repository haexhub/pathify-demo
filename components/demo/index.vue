<template>
  <div>
    <v-text-field
      v-model='hello'
    />
 
  </div>
</template>

<script lang='ts'>

import Vue from 'vue'
import { get, sync } from 'vuex-pathify'

export default Vue.extend({
  
  data: () => ({ })

, computed: {
    hello: sync('hello')
  }

})
</script>