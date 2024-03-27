<template>
    <div>
        <div class="mainWrapper ">
        <aside class="pageAside ">
            <div class="asidebox firstPlay" @click="toInfo"><h3>游戏说明</h3></div>
            <div class="asidebox"  @click="toNews"><h3>查看今日情报！</h3></div>
            <div class="asidebox" @click="toInvest"><h3>开始投资！</h3></div>
            <div class="asidebox" @click="toInvestRes"><h3>查看投资记录</h3></div>
            <div class="asidebox" @click="toRank"><h3>查看玩家排名</h3></div>
         </aside>
         <div class="main ">
            <router-view></router-view>
         </div>
        </div>
    </div>
  </template>
  
<script setup lang="ts">
    import { useRouter, RouterView } from 'vue-router';
    import {useLoginStore} from '@/store/Login'
    import {useInvestStore} from '@/store/Invest'
    import { storeToRefs } from 'pinia'
    const loginStore = useLoginStore()
    const investStore = useInvestStore()
    let {isLogin} = storeToRefs(loginStore)
    let {lastInvested} = storeToRefs(investStore)
    const router = useRouter()
    function toInfo(){
        router.replace('/Info')
    }
    function toRegister(){
        router.push({
            name:'Register',
            params:{
                isRegister:1
            }
        })
    }
    function toNews(){
        if(isLogin.value)
            router.push('/News')
        else toRegister()
    }
    function toInvest(){
        if(isLogin.value)
            router.push('/Game')
        else toRegister()
    }
    function toInvestRes(){
        if(!isLogin.value)toRegister()
        else{
            if(lastInvested.value==undefined)alert("请先进行一次投资，再来查看吧")
            else router.push('/InvestRes')
        }
    }
    function toRank(){
        if(isLogin.value)
            router.push('/Rank')
        else toRegister()
    }
    

</script>

<style  scoped>
.leftfix {
    float: left;
}
.rightfix {
    float: right;
}
.clearfix::after {
    content: '';
    display: block;
    clear: both;
}
.main{

width: 896.8px;
height: 566.4px;
/* border: 2px solid burlywood; */
background-color: rgb(242, 192, 126);
}
.mainWrapper{
border: 2px solid rgb(255, 180, 82);
display: flex;
}
.pageAside{
    width: 180px;
    height: 500px;
}
.asidebox{
    width: 150px;
    height: 60px;
    margin: 37px auto;
    background-color: rgb(254, 192, 111);
    border: 1.6px solid rgb(251, 162, 45);
    line-height: 60px;
    box-shadow: 2px 2px 1px  gray;

}
.asidebox:hover{
    cursor: pointer;
}
.asidebox h3{
    margin: auto;
}

  </style>
  