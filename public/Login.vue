<template>
    <div class="login">
        <h3>登录界面</h3>
        <form method="post">
            <input type="text" class="username" placeholder="请输入用户名" autofocus>
            <input type="password" class="password" placeholder="请输入密码">
            <button class="loginButton">
                登录
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">

</script>

<style  scoped>
.login{
    margin: 60px auto;
    overflow: hidden;
    background-color: rgb(180, 226, 251);
    width: 360px;
    height: 480px;
    text-align: center;
}
input{
    margin: 40px auto 0px;
    height: 34px;
    width: 268px;
}
.loginButton{
    margin-top: 40px;
    height: 36.6px;
    width: 271.6px;
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
    font-size: 16px;
    margin-left: 10px;
}
</style>
