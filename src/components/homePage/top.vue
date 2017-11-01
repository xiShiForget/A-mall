<template>
    <div class="top">
     <img src="../../image/icon/message.png" width="25" height="25" class="left">
      <router-link to="/search">
        <div class="text">
        <img src="../../image/icon/search.png" width="20" height="20"/>
        <span>眉笔</span>
      </div>
      </router-link>
      <img src="../../image/icon/cart.png"width="25" height="25" class="right">
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
.top{
 position: relative;
 margin-top: 10px;
  .left{
    float: left;
    margin-left: 3%;
  }
.text{
  position: relative;
  float: left;
  width: 70%;
  height: 30px;
  margin-left: 4%;
  border-radius: 4px;
  border: 1px solid rgb(238,238,238);
  background: rgba(238,238,238,0.8);
  img{
    position: absolute;
    left: 5px;
    top: 5px;
  }
 span{
   position: absolute;
   top: 9px;
   font-size: 13px;
   color: gray;
   left: 30px;
 }

}
  .right{
    margin-left: 15px;
    margin-top: 2px;
  }

}
</style>
