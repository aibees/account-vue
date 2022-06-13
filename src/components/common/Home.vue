<template>
  <div id="main">
    <h2>자산관리시스템</h2>
    <PayHome />

    <StockHome />
    <div class="commons">
        <div class="common-items center">
            배치정보 관리
        </div>
        <div class="common-items center">
            기준정보 설정
        </div>
        <div class="common-items center">
            개인정보 수정
        </div>
    </div>
  </div>
</template>

<script setup>
  import PayHome from '../account/PayHome.vue';
  import StockHome from '../stock/StockHome.vue';
</script>

<style lang="scss">
  @import "@@/common/home.scss";

</style>
