<template>
  <div class="my_bank">
    <div class="my_bank_left">
      <div id="recent_title">
          보유 현황
      </div>
      
      <div id="recent_amt">
        {{ data.amount }}원
      </div>
      <div id="my_limit">
        <hr/>
        사용한도<br/>
        [<span id="limit_used" style="color:red">{{ data.used }}</span> / {{ data.limit }}]
      </div>
    </div>
    <div class="my_bank_right">
      <div class="cards"  v-for="card in data.cards" v-bind:key="card">
        <div class="name">
          {{ card.name }}
        </div>
        <div class="used">
          {{ card.used }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onBeforeMount, ref, inject } from 'vue';
  const $axios = inject('$axios')
  let data = ref({})

  // ref / reactive로 감싸야 반응형 객체가 된다.
  // ref : value로 한번 들어가 준 다음 값을 update
  //   ex) data.value.amount = ~
  // reactive : 바로 값에 접근
  //   ex) data.amount = ~
  /*
   * Lifecycle Hooks
   */
  onBeforeMount(async () => {
      await $axios.get('http://localhost:19002/account/raw')
        .then((result) => {
            const res_data = result.data.data
            
            data.value = {
                'amount': res_data.amount,
                'used': res_data.used,
                'limit': res_data.limit,
                'cards': res_data.cards
            }
            
            document.getElementById('limit_used')
                    .style.color=(Number(res_data.limit.replace(',', '')) > Number(res_data.used.replace(',', '')))? 'blue':'red';
        })
        .catch((err) => {
            alert(err)
        })
  })
</script>

<style>

</style>