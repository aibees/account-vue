<script setup>
</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="scss">
  @import "@@/_variables.scss";


  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    @include toPC {
      width: 700px;
      margin: auto;
      height: 100vh;
    }
  }


</style>
