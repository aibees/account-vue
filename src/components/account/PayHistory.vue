<template>
  <div id="main">
    <Header msg="가계부 내역조회" referrer="/account" />
    <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
    <div id="main_header">
        <div class="main_header_left">
            <h3>수입 및 지출 내역서</h3>
            <div class="card">
                <div>삼성카드</div>
            </div>
            <div class="card">
                <div>하나카드</div>
            </div>
            <div class="card">
                <div>신한카드</div>
            </div>
        </div>
        <div class="main_header_right">
            <p id="janyeo">잔여한도</p>
            <p id="limit">{{ limit }}</p><p id="won">원</p>
        </div>
    </div>
    <div id="main_container">
        <div id="query_container">
            <table>
                <tbody>
                    <tr>
                        <td>1주일</td>
                        <td>1개월</td>
                        <td>3개월</td>
                        <td>상세조회</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="data_container">
            <li class="data" v-for="data in listData" v-bind:key="data">
                <div class="items">
                    <div class="data_creatdt">
                        {{ data.creatDt }}
                    </div>
                    <div class="data_slips" v-for="slip in data.slips" v-bind:key="slip">
                        <div class="slip">
                            <div class="slip_left">
                                {{ slip.time }} / {{ slip.payway }} <br/>
                                {{ slip.remark }}
                            </div>
                            <div class="slip_right">
                                <span id="usage">{{ slip.gubun }} / {{ slip.usage }}</span> <br/>
                               <span id="amount">{{ slip.amount }}</span>원
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    </div>
  </div>
</template>

<script setup>
    import Header from '../common/commonHeader.vue'
    import { ref } from 'vue'

    const limit = ref("143,453")

  const listData = ref([
      {
          creatDt: '2022.05.18',
          slips: [{
              time: '11:28:13',
              remark: 'test',
              amount: '6,100',
              usage: '식비',
              gubun: '지출',
              payway: '신한카드'
          },{
              time: '11:28:13',
              remark: 'test',
              amount: '6,100',
              usage: '식비',
              gubun: '지출',
              payway: '하나카드'
          }]
      },
      {
          creatDt: '2022.05.17',
          slips: [{
              time: '23:28:13',
              remark: 'test22',
              amount: '6,100',
              usage: '식비',
              gubun: '지출',
              payway: '계좌이체'
          }] 
      }
  ])
</script>


<style lang="scss" scoped>
    #main {
        display: block;

        #main_header {
            display: flex;
            text-align: left;
            color: rgb(233, 233, 233);
            padding-top: 30px;
            padding-left: 27px;
            padding-right: 10px;
            height: 170px;
            background-color: rgb(52, 149, 214);
            justify-content: space-between;
        
            .main_header_left {
                float: left;
            }
            
            .main_header_right {
                float: right;
                position: relative;
                #janyeo {
                    width: 80px;
                    position: absolute;
                    right: 7px;
                    bottom: 34px;
                }
                #limit {
                    width: 80px;
                    position: absolute;
                    right: 49px;
                    bottom: -5px;
                    text-align: right;
                    font-weight: bolder;
                    font-size: 24px;
                }
                #won {
                    width: 80px;
                    position: absolute;
                    right: -40px;
                    bottom: 5px;
                }
            }
        }

        #main_container {
            #query_container {
                height: 120px;
                background-color: white;

                table {
                    padding-top: 22px;
                    margin: auto;

                    tbody tr td {
                        width: 65px;
                        padding: 7px 20px;
                        background-color: rgb(238, 238, 238);
                    }
                }
            }

            #data_container {
                .data {
                    list-style: none;
                    .items {
                        .data_creatdt {
                            width: 100%;
                            background-color: rgb(238, 238, 238);
                            text-align: left;
                            padding: 7px 0px 7px 15px;
                        }

                        .data_slips {
                            .slip {
                                padding: 19px 7px;
                                border-bottom: 1px solid rgb(238, 238, 238);
                                display: flex;
                                justify-content: space-between;
                                .slip_left {
                                    float: left;
                                    margin-left: 20px;
                                    text-align: left;
                                }
                                .slip_right {
                                    color: rgb(52, 149, 214);
                                    float: right;
                                    margin-right: 20px;
                                    text-align: right;
                                    
                                    #usage {
                                        font-size: 13px;
                                    }
                                    #amount {
                                        font-size: 23px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
