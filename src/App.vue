<template>
  <header>
    <form>
      <RouterLink to="/">
        <img src="/logo.png.png" alt="Lenny Kravitz logo" />
      </RouterLink>
    </form>
  </header>
  <RouterView />
</template>


<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>



<style scoped>

</style>
