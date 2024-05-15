<template>
    <div class="register">
        <h3>{{hint}}界面</h3>
        <div class="welcome">
            <img src="../../pictures/cats/003.png" alt="003">
            <span>{{welcome}}</span>
        </div>
        <form @submit.prevent="sendRequest">
            <div class="usernameWrapper">
                <span>用户名：</span><input type="text" class="username" 
                :placeholder="usernameHolder" autofocus
                 v-model="userInfo.username"
                 @change="judgelength($event,0)" @input="erase">
                 <div class="alert" v-if="alert1">用户名长度不能超过10位</div>
            </div>
            <div class="passwordWrapper" :class="btclass1">
                <span>密码：</span><input type="password" 
                class="password" :placeholder="passwordHolder" 
                v-model="userInfo.password"
                pattern="[a-zA-Z0-9_]+" title="密码只能包含字母、数字和下划线。"
                @change="judgelength($event,1)" @input="erase">
                <div class="alert" v-if="alert2">密码长度必须为6至16位</div>
            </div>
            <button class="registerButton" :class="btclass2">
                {{hint}}
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { computed, ref,reactive, watch } from 'vue';
import { useRoute,useRouter } from 'vue-router'
import {useLoginStore} from '@/store/Login'
import {useInvestStore} from '@/store/Invest'
import { storeToRefs } from "pinia"
import axios from 'axios';
const loginStore = useLoginStore()
const InvestStore = useInvestStore()
const {updateInvest} = InvestStore
let {isLogin,data} = storeToRefs(loginStore)
    //传参
    defineProps(['isRegister'])
    const route = useRoute()
    const router = useRouter()
    //isRegister == 0 judge == true 登录,反之是注册
    let judge = computed({
        get(){
        return route.params.isRegister ==="0"
    },
        set(val){
        route.params.isRegister = val===true?"0":"1"
        }})
    let welcome = computed(()=>{
        return judge.value?"欢迎回来！":"欢迎体验本游戏！"
    })
    let hint = computed(()=>{
        return judge.value?"登录":"注册"
    })
    let usernameHolder = computed(()=>{
        return judge.value?"请输入用户名":"用户名长度不超过10位"
    })
    let passwordHolder = computed(()=>{
        return judge.value?"请输入密码":"密码长度为6至16位"
    })
    let userInfo = reactive({username:'',password:''})
    let alert1 = ref(false)
    let alert2 = ref(false)
    let btclass1 = computed(()=>{
        return alert1.value?'shortdis':'longdis'
    })
    let btclass2 = computed(()=>{
        return alert2.value?'shortdis':'longdis'
    })
    function judgelength(event:any,x:number){
        if(judge.value){
            alert1.value = false
            alert2.value = false
            return
        }
        if(x===0){
            if(!isSatisfyName()){
                alert1.value = true
                event.target.focus();
            }else{
                alert1.value = false
            }
        }else{
            if(!isSatisfyPass()){
                alert2.value = true
                event.target.focus();
            }
            else{
                alert2.value = false
            }
        }
    }
    function erase(){
        if(judge.value){
            alert1.value = false
            alert2.value = false
            return
        }
        if(isSatisfyName()&&alert1.value)alert1.value = false
        if(isSatisfyPass()&&alert2.value)alert2.value = false
    }
    function isSatisfyName(){
        return userInfo.username.length<=10
    }
    function isSatisfyPass(){
        return userInfo.password.length>=6 && userInfo.password.length<=16 
    }
    
    function toMain(response:any){
        loginStore.isLogin = true
        Object.assign(loginStore.data,response.data)
        loginStore.data.showUsername = response.data.username
        loginStore.data.password = ""
        //保存上次交易信息
        updateInvest(response.data.sell,response.data.threeInversted,response.data.profit,response.data.lastInvested)
        console.log(response.data.lastInvested,"response.data.lastInvested");
        
        router.push('/')
    }
    function sendRequest(){
        if(isSatisfyName()&&isSatisfyPass()){
            //登录请求
            if(judge.value){
                try {
                    axios.post('http://localhost:8000/login',{
                        userInfo,
                    }).then((response)=>{
                        if(response.data === false){
                            //登陆失败
                            alert('用户名或密码错误')
                        }else{
                            toMain(response)
                        }
                    })
                } catch (error) {
                    console.log(error)
                }
            }
            //注册请求
            else{
                try {
                    axios.post('http://localhost:8000/register',{
                        userInfo,
                    },).then((response)=>{
                        if(response.data === false){
                            //登陆失败
                            alert('注册失败，可能是用户名重复')
                        }else toMain(response)
                    })
                } catch (error) {
                    console.log(error)
                }
            }
        }else{
            alert("请注意用户名和密码的格式")
        }
    }
    
</script>

<style  scoped>
.register{
    margin: 60px auto;
    overflow: hidden;
    background-color: rgb(180, 226, 251);
    width: 360px;
    height: 480px;
    text-align: center;
}
.passwordWrapper input{
    margin-left: 8px;
}
.passwordWrapper{
    margin-left: 7px;
}
input{
    height: 34px;
    width: 268px;
}
.alert{
    font-size: 14px;
}
.shortdis{
    margin-top: 24px;
}
.longdis{
    margin-top: 40px;
}
.registerButton{
    height: 36.6px;
    width: 271.6px;
    font-size: 1.2em;
    background-color: pink;
    cursor: pointer;
}
.welcome{
    font-size: 0;
    height: 153px;
    line-height: 153px;
}
.welcome img{
    vertical-align: middle;
}
.welcome span{
    vertical-align: middle;
    font-size: 18px;
    margin-left: 10px;
}

</style>
