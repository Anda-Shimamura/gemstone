<template>
  <div class="rank">
    <h3>金币最多的十位玩家！</h3>
    <div class="tablebox">
      <table>
        <thead>
          <tr>
            <th>排名</th>
            <th >用户名</th>
            <th >金额</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) of top10" :key = index >
            <td>{{ index+1 }}</td>  
            <td class="username">{{ item.username }}</td>
            <td>{{ item.money }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { reactive,onMounted } from "vue"

interface user{
  username:string,
  money:number
}
let top10:Array<user> = reactive([])

onMounted(()=>{
    axios.get('http://192.168.0.102:8000/top').then((response)=>{
      console.log(response)
      for(let item of response.data){
        top10.push(item)
      }
      
    })
    
})


</script>

<style  scoped>
.tablebox{
  margin: 40px auto;
}
h3{
  font-size: 22px;
}
table{
  border: 1.5px solid black;
  border-collapse: collapse; /* 移除表格内边框间的间隙 */
  margin: 0 auto;
}
th, td {
  border: 1px solid black;
  border-collapse: collapse; /* 移除表格内边框间的间隙 */
  font-weight: normal;
  font-size: 19px;
  width: 60px;
  height: 35px;

}
.username{
  width: 360px;
}
</style>
