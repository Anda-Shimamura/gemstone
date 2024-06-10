<template>
  <div>
    <header class="headerWrapper clearfix">
      <div class="leftHeader leftfix">
        <img src="/pictures/cats/header_cat.png" alt="header_cat" class="leftfix clearfix">
        <h1 class="leftfix">宝石投资!</h1>
      </div>
      <div class="headerButtons rightfix">
        <button v-if="!isLogin" type="button" class="register" @click="register">注册</button>
        <button v-if="!isLogin" type="button" class="login" @click="login">登录</button>
        <span v-if="isLogin" class="showUsername">用户：{{ data.showUsername }}</span>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router'
import { useLoginStore } from '@/store/Login'
import { storeToRefs } from 'pinia';
const LoginStore = useLoginStore()
const { isLogin, data } = storeToRefs(LoginStore)
const router = useRouter()
function loginOrRegister(x: number) {
  router.push({
    name: 'Register',
    params: {
      isRegister: x
    }
  })
}
function login() {
  loginOrRegister(0)
}
function register() {
  loginOrRegister(1)
}
</script>

<style scoped>
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

.headerWrapper {
  height: 110px;
  line-height: 110px;
  border-bottom: rgb(248, 172, 80) 2px solid;
}

img {
  height: 110px;
}

h1 {
  font-size: 36px;
  margin: 0 10px;
  color: rgb(38, 14, 155);
}

button {
  background-color: rgb(180, 241, 241);
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;
  box-shadow: 2px 2px 1px gray;
}

.showUsername {
  font-size: 20px;
  margin-right: 25px;
}
</style>
