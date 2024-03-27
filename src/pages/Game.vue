<template>
  <div>
    <div class="moneyShow">
      <span>总资产：{{ money }}</span>
      <span>本次投资需要：{{investment}}</span>
      <span>剩余金币：{{remain}}</span>
    </div>
    <div class="gemstone">
      <div class="topBox ">
        <div :class="isActive[index]?'active':'topgemBox' " v-for="(g,index) of gemsPics.slice(0,3)" :key="index" @click="changePicStyle(index)">
        <img :src="g" alt="gemstone">
        <h5>宝石{{ key[index] }}</h5>
      </div>
      </div>
      <div class="bottomBox ">
        <div :class="isActive[index+3]?'active':'bottomgemBox' " v-for="(g,index) of gemsPics.slice(3)" :key="index+3" @click="changePicStyle(index+3)">
        <img :src="g" alt="gemstone">
        <h5>宝石{{ key[index+3] }}</h5>
      </div>
      </div>
    </div>
    <div class="submitDiv">
      <button class="submit" :disabled="count===0" @click="sendInvest">选好了！</button>
    </div>
    
  </div>
</template>

<script setup lang="ts">
    import {ref,reactive, computed,toRefs} from 'vue'
    import {useLoginStore} from '@/store/Login'
    import {useInvestStore} from '@/store/Invest'
    import { storeToRefs } from 'pinia';
    import { useRouter } from 'vue-router';
    const router = useRouter()
    import axios from 'axios';
    import dayjs from 'dayjs'

    const LoginStore = useLoginStore()
    const InvestStore = useInvestStore()

    const {data} = LoginStore
    //函数不用toRefs
    const {updateInvest} = InvestStore
    //lastInvested是基本类型，必须toRefs
    const {lastInvested} = storeToRefs(InvestStore)
    //money是基本类型，必须toRefs
    let {money,showUsername} = toRefs(data)
    let {threeNum} = data

    let num = 6
    let gemsPics = new Array(num)
    for(let i = 0;i<num;i++){
      gemsPics[i] = "/pictures/gemstone/00"+`${i+1}`+".png"
    }
    //哪些宝石被选择了
    let isActive =reactive(Array(num).fill(false)) 
    let key = [1,2,3,4,5,6]
    let count = ref(0)
    let investment = computed(()=>{
      return count.value*600+200
    })
    let remain = computed(()=>{
      return money.value - investment.value
    })
    //点击样式
    function changePicStyle(index:number){
      
      if(count.value>2&&!isActive[index])return 
      else {
        isActive[index] = !isActive[index]
        if(count.value<=2&&isActive[index])count.value++
        else count.value--
      }
    }

    let sell = reactive(Array(6))
    //common从2开始记录
    let common:number[] = []
    for(let i = 2;i<=6;i++){
      if(!threeNum.includes(i))common.push(i)
    }
    //get [0-x)随机数
    function getRandom(x:number):number{
      return (Math.random() * x);
    }
    let p = 600
    let profit = 0
    //生成本次投资宝石价格
    function getSell(){
      //sell存储了本次交易价格
      sell[0] = 720
      //处理普通宝石
      //threeNum[i] 是第几颗宝石
      console.log("common",common)
      for(let i of common){
        console.log('i=',i,)
        switch(i){
          case(2):sell[1] = Math.round((getRandom(20)+10)*p/100+p)
          break
          case(3):sell[2] = Math.round((getRandom(40))*p/100+p)
          break
          case(4):sell[3] = (getRandom(1)<=0.5?0.3:0.1)*p+p
          break
          case(5):sell[4] = (getRandom(1)<=0.3?0.5:0.07)*p+p
          break
          case(6):sell[5] = (getRandom(1)<=0.2?1:0)*p+p
          break
        }
      }
      console.log("threeNum",threeNum)
      //lucky
      switch(threeNum[0]){
        //30%
        case(2):sell[1] = 780
        break
        case(3):sell[2] = (getRandom(1)<=0.5?820:750)
        break
        case(4):sell[3] = (getRandom(1)<=0.01?1.1:1.3)*p
        break
        case(5):sell[4] = (getRandom(1)<=0.6?1.5:1.07)*p
        break
        case(6):sell[5] = (getRandom(1)<=0.37?1:0)*p+p
        break
      }
      //unlucky
      switch(threeNum[1]){
        //10%
        case(2):sell[1] = 660
        break
        case(3):sell[2] = (getRandom(1)<=0.8?630:690)
        break
        case(4):sell[3] = (getRandom(1)<=0.1?1.3:1.1)*p
        break
        case(5):sell[4] = (getRandom(1)<=0.8?1.07:1.5)*p
        break
        case(6):sell[5] = (getRandom(1)<=0.15?1:0)*p+p
        break
      }
      //处理风险宝石
      switch(threeNum[2]){
        case(2):sell[1] = (getRandom(1)<=0.5?630:810)
        break
        case(3):sell[2] = (getRandom(1)<=0.5?550:860)
        break
        case(4):sell[3] = (getRandom(1)<=0.5?1:1.4)*p
        break
        case(5):sell[4] = (getRandom(1)<=0.5?1.8:0.6)*p
        break
        case(6):sell[5] = (getRandom(1)<=0.5?2.7:-0.3)*p
        break
      }
      console.log(sell);
    }
    function sendInvest(){
      let today = dayjs().format("YYYY-MM-DD")
      if(lastInvested.value===today){
        alert("今天已经投资过了，请明天再来吧") 
        return
      }
      //用于记录购买的宝石，是下标，转化到宝石要加1
      let threeInversted = []
      getSell()
      for(let i=0;i<6;i++){
        if(isActive[i]===true){
          profit = profit+sell[i]-600
          //threeInversted是从0开始算的
          threeInversted.push(i)
        }
      }
      console.log("###"+profit)
      console.log("###"+threeInversted)
      console.log("###$"+showUsername.value)

      axios.post('http://192.168.0.102:8000/invest',{
        //bug！！！
        showUsername:showUsername.value,
        threeInversted,
        sell,
        profit,
        lastInvested:dayjs().format("YYYY-MM-DD")
      }).then((response)=>{
        //保存交易到pinia 
        //对象不可覆盖！
        updateInvest(response.data.sell,response.data.threeInversted,response.data.profit,response.data.lastInvested)
        LoginStore.data.money = response.data.money
        console.log(response.data)
        router.push('InvestRes')
      }).catch(err=>console.log(err,"$$$"))
    }
</script>

<style  scoped>
h3{
  font-size: 21px;
}
.moneyShow{
  margin: 25px 0 20px;
}
.moneyShow span{
  font-size: 18px;
  margin: 0 15px ;
}
/* .gemstone{
  width: 800px;
} */
.topBox,.bottomBox{
  display: flex;
  justify-content: space-evenly;
}
.topgemBox,.bottomgemBox{
  margin-bottom: 10px;
  height: 210px;
  width: 150px;
  border: 3px solid gold;
  cursor: pointer;
}
.active{
  margin-bottom: 10px;
  height: 210px;
  width: 150px;
  border: solid 3px greenyellow;
  cursor: pointer;
}
.gemstone img{
  width: 130px;
  margin: 14px 0;
}
h5{
  margin: 0;
  font-size: 1em;
}
.submit{
  height: 40px;
  width: 90px;
  background-color: pink;
}
</style>
