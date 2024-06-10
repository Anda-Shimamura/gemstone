<template>
  <div>
    
        <div class="info" >
            <h3>本游戏是一款投资策略游戏，您可以通过投资宝石赚取中间利润</h3>
            <p>
                游戏玩法：
                每天商城会上架六颗宝石，您每天可购入三颗宝石并将其售出
            </p>
            <p>
                宝石售价和收益率详情如下表所示。
            </p>
            <div class="tableWrapper ">
              <table class=" table1" border="1" cellspacing="0">
                <caption>宝石收益率表一</caption>
                <thead>
                     <tr>
                        <th>宝石</th>
                        <th>收益率</th>
                    </tr>
                </thead>
                    <tbody>
                    <tr>
                        <td>宝石一</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <td>宝石二</td>
                        <td>10%-30%</td>
                    </tr>
                    <tr>
                        <td>宝石三</td>
                        <td>0-40%</td>
                    </tr>
                </tbody>
            </table>
            <table class=" table2" border="1" cellspacing="0">
                <caption>宝石收益率表二</caption>
                <thead>
                     <tr>
                        <th>宝石</th>
                        <th >收益率</th>
                        <th >概率</th>
                    </tr>
                </thead>
                    <tbody>
                    <tr>
                        <td rowspan="2">宝石四</td>
                        <td>30%</td>
                        <td>50%</td>
                        
                    </tr>
                    <tr>
                        <td>10%</td>
                        <td>50%</td>
                    </tr>
                    <tr>
                        <td rowspan="2">宝石五</td>
                        <td>50%</td>
                        <td>30%</td>
                    </tr>
                    <tr>
                        <td>7%</td>
                        <td>70%</td>
                    </tr>
                    <tr>
                        <td rowspan="2">宝石六</td>
                        <td>100%</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>80%</td>
                    </tr>
                </tbody>
            </table>
        </div>
            <p>
                每天会随机刷新三颗特殊宝石，分为幸运宝石、厄运宝石和风险宝石。幸运宝石会提高收益率的期望，厄运宝石会降低收益率的期望，风险宝石将以50%概率获得高收益或是高亏损！点击“查看今日情报”，小猫将告诉您有关三颗特殊宝石的情报。
            </p>
            <p>
                在初次游玩时，您拥有3000金币作为本金，每天购进宝石需要支付200金币作为交易税。
            </p>
        </div>
        <div class="imgbox">
            <img src="/pictures/cats/007.png" alt="cat">
            <img src="/pictures/gemstone/001.png" alt="gemstone" class="infogem">
        </div>
    
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped>

.info{
text-align: center;
}
.tableWrapper{
    display: flex;
    justify-content: space-evenly;
    width: 500px;
    margin: 30px 170px;
}
p{
    text-align: left;
    text-indent: 2em;
    margin: 10px 20px 10px 10px;
}

caption{
    margin-bottom: 5px;
}
.table1 tr{
    height: 42px;
}
.table2 td{
    width: 60px;
}
.table2 thead tr{
    height: 35px;
}

</style>
<style scoped>
.imgbox{
    height: 126px;
    line-height: 126px;
}
img{
    width: 100px;
    vertical-align: middle;;
}
.infogem{
    width: 60px;
    margin-top: 39px;
}
</style>