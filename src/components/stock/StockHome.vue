<template>
  <div class="center stock">
      <div class="preview">
        <font-awesome-icon class="preview_icon" icon="arrow-trend-up" />
        증권투자 현황 분석
      </div>

      <div class="my_account">
          <div class="my_account_left">
              <div id="recent_title">
                  보유 현황
              </div>
              <div id="recent_amt">
                  {{ data.amount }}원
              </div>
              <div id="recent_diff">
                -{{ data.diff }}({{ data.percent }}%)    
              </div>
          </div>
          <div class="my_account_right">
            <button id="to_detail" v-on:click="lookup_history()">자세히 보기</button>
          </div>
      </div>

      <div class="my_stock">
          <ul>
            <li v-for="data in data.recent_stocks" v-bind:key="data">
                <div class="my_stock_list">
                    <div class="stock_">
                        {{ data.name }}
                    </div>
                    <div id="cur_amt">
                        {{data.current }} ({{ data.percent }}%)
                    </div>
                </div>
            </li>
        </ul>
      </div>

      <div id="buttons">
          <button id="select" v-on:click="lookup_history()">종목검색</button>
          <button id="insert" v-on:click="insert_history()">매매처리</button>
      </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    var data = {
        'amount': '1,837,100',
        'diff': '15,384',
        'percent': '-3.6',
        'recent_stocks': [
            {
                'name': '삼성전자',
                'current': '64570',
                'percent': '-1.2'
            },
            {
                'name': '삼성제약',
                'current': '3850',
                'percent': '-11.2'
            },
            {
                'name': 'SK하이닉스',
                'current': '182794',
                'percent': '13.2'
            }
        ]
    }

</script>

<style lang="scss" scoped>
    @import '@@/stock/stockHome.scss'
</style>