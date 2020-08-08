<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <demo />

      {{ $store.get('hello') }}
     
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Demo from '@/components/demo'

export default {
  components: {
    Logo,
    VuetifyLogo,
    Demo
  }


}
</script>
