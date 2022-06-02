<template>
  <div id="main">
    <div class="center bank">
      <div id="preview">
        preview
      </div>

      <div id="recent_output">
        <div class="recent">
          data1
        </div>
        <div class="recent">
          data2
          </div>
        <div class="recent">
          data3
          </div>
      </div>

      <div id="buttons">
          <button id="select" v-on:click="lookup_history()">조회</button>
          <button id="insert" v-on:click="insert_history()">입력</button>
      </div>
    </div>

    <div class="center stock">
      trading
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  const router = useRouter();

  const lookup_history = function() {
    router.push('/account/list');
  }

  const insert_history = function() {
    alert("입력하기");
  }

</script>

<style lang="scss" scoped>
  @import "@@/account/home.scss";

</style>
