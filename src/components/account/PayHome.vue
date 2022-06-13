<template>
  <div class="center bank">
      <div class="preview">
        <font-awesome-icon class="preview_icon" icon="money-bill-transfer" />
        은행거래 현황 분석
      </div>
      <HomeHeader />

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
</template>

<script setup>
  import { inject } from 'vue';
  import { useRouter } from 'vue-router';
  import HomeHeader from './home/HomeHeader.vue';
  const $axios = inject('$axios')
  const router = useRouter();

  const lookup_history = function() {
    router.push('/account/list');
  }

  const insert_history = async function() {
    
  }

</script>

<style lang="scss">
  @import '@@/pay/payHome.scss'
</style>
