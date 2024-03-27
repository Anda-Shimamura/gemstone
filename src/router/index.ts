import { createRouter,createWebHistory } from "vue-router"
// import Login from "@/pages/Login.vue"
import Register from "@/pages/Register.vue"
import Info from "@/pages/Info.vue"
import News from "@/pages/News.vue"
import PageMain from "@/pages/PageMain.vue"
import Game from "@/pages/Game.vue"
import InvestRes from "@/pages/InvestRes.vue"
import Rank from "@/pages/Rank.vue"

const router = createRouter({
    history:createWebHistory(), 
    routes:[
        {
            name:'Register',
            path:'/Register/:isRegister',
            component:Register,
            props:true
        },
        {
            name:'PageMain',
            path:'/',
            component:PageMain,
            children:[
                {
                    name:'Info',
                    path:'/Info',
                    component:Info
                },
                {
                    name:'News',
                    path:'/News',
                    component:News
                },
                {
                    name:'Game',
                    path:'/Game',
                    component:Game,
                },
                {
                    name:'InvestRes',
                    path:'/InvestRes',
                    component:InvestRes
                },
                {
                    name:'Rank',
                    path:'/Rank',
                    component:Rank
                },
            ]
        }
    ]
})
export default router


