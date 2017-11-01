<template>
<div class="content">
  <ul>
    <li v-for="item in homePage.bottom" :id="item.title">
      <router-link :to="'/nav/'+item.title">
        <div class="box">
        <div class="icon">
          <img :src="item.image" width="28" height="28">
        </div>
        <p class="title">{{item.title}}</p>
        </div>
      </router-link>
    </li>
  </ul>
  <router-view :homePage="homePage"></router-view>
</div>
</template>

<script>
    export default {
      props: {
       homePage: {
          type: Object
        }
      },
      data(){
        return{}
      }
    }
</script>

<style lang="less" scoped>
.content{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 52px;
  border-top: 1px solid gainsboro;
  ul{
    display: flex;
    width: 100%;
    height: 100%;
    background-color: white;
    li{
      flex: 1;
      line-height: 15px;
      text-align: center;
      font-size: 14px;
      .icon{
        margin-top: 3px;
      }
    }
  }
  .active{
  color: orangered;
  }
}
</style>
