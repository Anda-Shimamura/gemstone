import { defineStore } from "pinia";

import { ref,reactive } from "vue";
//接口不能export
//lastDate用于判断登陆时间，获取threenumber
interface Logindata{
  showUsername: string,
  password: string,
  money: number,
  lastDate:string,
  threeNum:Array<number>
}
export const useLoginStore = defineStore("login",()=>{
  let isLogin = ref(false)
  
  let data:Logindata = reactive({
    showUsername: "",
    password: "",
    money: 0,
    lastDate:"",
    threeNum:[]
  })
  
  return {isLogin,data}
})