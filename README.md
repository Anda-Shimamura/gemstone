# gemstone

一款基于Vue3，Node.js设计的网页小游戏，游戏玩法是通过购买宝石赚取利润，通过提示进行逻辑推理，投资收益期望更高的宝石以赚取更多金币。游戏提供了用户注册与登录、查看交易详情、用户排名等功能。  

本项目包含前端部分，如您需要查阅后端部分，请参阅gemstone-backend仓库,测试服务器ip地址为192.168.0.102，如您需要在自己电脑上使用请修改。

## src文件介绍：

### Component:  

  PageHeader.vue 页面头部组件  
  
### Pages:  

  PageMain.vue 页面主要内容路由组件，主要路由切换都在此组件中进行  
  
  Register.vue 注册和登陆组件，通过一个变量控制两种功能，减少了代码量  
  
  其他组件都是游戏相关组件 通过点击左侧边栏事件进行切换  
  
### Store(pinia仓库):  

  Login.ts 保存注册登录相关数据  
  
  Insert.ts 保存投资请求相关数据  
  

## 使用技术栈：

前端：Javascript(ES6), Vue3, Axios  

后端：Node.js, Express, Mongo, Mongoose  

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

# 游戏玩法  

在浏览器运行运行后，先按照提示注册用户，后续游玩需登录账户。由于每天只能投资一次，请仔细阅读讲解再进行投资喔~
