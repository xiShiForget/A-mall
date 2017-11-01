<template>
   <div class="container">
     <div class="top">
       <router-link to="/nav/首页">
         <span class="return"><</span>
       </router-link>
       <input type="text" placeholder="  眉笔"/>
       <span class="search">搜索</span>
     </div>
   </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
.container{
  position: relative;
  .top{
    margin-top: 10px;
    text-align: center;
    .return{
      position: absolute;
      display: inline-block;
      left: 20px;
      width: 20px;
      height: 20px;
    }
    input{
      position: absolute;
      left: 15%;
      width: 70%;
      height: 17px;
      border-radius: 4px;
      border: 1px solid grey;
    }
    .search{
      position: absolute;
      left: 88%;
      font-size: 14px;
      line-height: 21px;
      color: grey;
    }
  }

}
</style>
