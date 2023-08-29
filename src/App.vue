<script setup>
import { RouterView } from 'vue-router'
import MenuNasa from '@/components/MenuNasa.vue'
</script>

<template  >
  <v-app class="mt-10" >
    <v-app-bar flat color="#0D0D0D" >
       <MenuNasa/>
    </v-app-bar>   
      <RouterView />  
  </v-app>
  
</template>

<style >
</style>
