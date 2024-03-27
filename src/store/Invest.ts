import { defineStore } from "pinia";

import { ref,reactive } from "vue";

export const useInvestStore = defineStore("Invest",()=>{
    //6个宝石的售价
    let lastSell: Array<number> = reactive([])
    //购买了那几个宝石，是宝石下标
    let threeInversted: Array<number> = reactive([])
    //获得的利润
    let lastProfit = ref(0)
    //上次交易日期
    let lastInvested = ref("")
    

    function updateInvest(sell:[],three:[],profit:number,day:string){
      lastSell.length = 0
      for(let i of sell)lastSell.push(i)
      threeInversted.length = 0
      for(let i of three)threeInversted.push(i)
      lastProfit.value = profit
      lastInvested.value = day
      console.log(day,"day");
      
    }
    
  
  return {lastSell,threeInversted,lastProfit,lastInvested,updateInvest}
})