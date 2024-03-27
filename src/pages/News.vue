<template>
  <div>
    
    <div class="news">
            <div class="head">
              <h3>小猫会为您提供今日最新情报</h3>
              <span>日期：{{ data.lastDate }}</span>
            </div>
            <div class="content ">
              <div class="box " v-for="(item,index) of catsPics" :key="data.threeNum[index]">
                <h4>{{ hint[index] }}</h4>
                  <div class="paragraph">
                    <p>{{ paragraph[index] }}</p>
                  </div>
                  <img :src="item" alt="newsCat" class="newsCat">
              </div>
            </div>
            
        </div>
  </div>
</template>

<script setup lang="ts">
    import {useLoginStore} from '@/store/Login'
    import { storeToRefs } from 'pinia';
    const LoginStore = useLoginStore()
    const {data} = storeToRefs(LoginStore)
    let catsPics = new Array(3)
    for(let i = 0;i<3;i++){
      catsPics[i] = "/pictures/cats/00"+`${data.value.threeNum[i]}`+".png"
    }
    let paragraph = [
      `宝石${data.value.threeNum[0]}收益的概率会变高喵！`,
      `听我一言，宝石${data.value.threeNum[1]}还是不要买了喵`,
      `宝石${data.value.threeNum[2]}充满机遇&风险，适合赌徒喵！`,
    ]
    let hint = ["幸运宝石","厄运宝石","风险宝石"]
    
 
</script>

<style  scoped>
.head{
  margin-top: 40px;
}
.head h3{
  font-size: 21px;
}
.content{
  width: 896.6px;
  margin: 30px auto 0;
  display: flex;
}
.box{
  width: 296px;
  height: 336px;
  position: relative;
}
.box img{
    width: 110px;
}
h4{
  position: absolute;
  margin: 0 auto;
  top: 30px;
  left: 126px;
}
.newsCat{
  position: absolute;
  left: 10px;
  bottom: 30px;
}
.paragraph{
  position: absolute;
  bottom: 188px;
  left: 70px;
}
p{
  font-size: 19px;
}
</style>
