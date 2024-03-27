<template>
  <div>
    <div class="header">
      <h3>投资记录详情</h3>
    </div>
    <div class="content">
      <h4>提交日期：{{lastInvested}}</h4>
      <div class="allGems">
        <span>交易总额：{{ wholeMoney }}金币</span> 
        <span>收益情况：{{lastProfit}}金币</span>
      </div>
      <div class="allGems">
        <span>交易宝石：<span v-for="(item,index) of threeInversted" :key = index>{{ "宝石"+`${item+1}`+`${index !== 2?',':'。'}` }}</span></span> 
      </div>
      <div class="tableWrapper">
        <table   cellspacing="0">
                <thead>
                     <tr>
                        <th>宝石</th>
                        <th >售价</th>
                        <th >利润</th>
                    </tr>
                </thead>
                  <tbody>
                    <tr v-for="(item,index) of lastSell.slice(0,3)" :key = index >
                        <td :class="judgeActive(index)">宝石{{index+1}}</td>
                        <td :class="judgeActive(index)">{{item}}</td>
                        <td :class="judgeActive(index)">{{item-600}}</td>
                    </tr>
                </tbody>
            </table>
            <table class="" border="1" cellspacing="0">
                <thead>
                     <tr>
                        <th>宝石</th>
                        <th >售价</th>
                        <th >利润</th>
                    </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) of lastSell.slice(3)" :key = index+3>
                        <td :class="judgeActive(index+3)">宝石{{index+4}}</td>
                        <td :class="judgeActive(index+3)">{{item}}</td>
                        <td :class="judgeActive(index+3)">{{item-600}}</td>
                    </tr>
                </tbody>
            </table>
      </div>
      
      
</div>
  </div>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue'
import {useInvestStore} from '@/store/Invest'
import { storeToRefs } from "pinia"
const InvestStore = useInvestStore()
let {lastProfit,lastInvested} = storeToRefs(InvestStore)
let {lastSell,threeInversted} = InvestStore
let wholeMoney = ref(lastProfit.value+2000)
function judgeActive(index:number){
    return threeInversted.includes(index)?'active':'inactive'
}








</script>

<style  scoped>

h3{
  font-size: 26px;
}
h4{
  font-size: 14px;
}
.content,span{
  font-size: 21px;
  margin: 0 10px;
}
.allGems{
  margin-top: 50px;
}
.tableWrapper{
    display: flex;
    justify-content: space-evenly;
    width: 550px;
    margin: 40px auto 0;
}
td,.active{
  color: rgb(168, 2, 2);
}
td,.inactive{
  color: rgb(69, 58, 58);
}
table{
  border: 1.5px solid black;
  border-collapse: collapse; /* 移除表格内边框间的间隙 */

}
th, td {
  border: 1px solid black;
  border-collapse: collapse; /* 移除表格内边框间的间隙 */
  font-weight: normal;
  font-size: 19px;
  width: 60px;
  height: 35px;


}

</style>
