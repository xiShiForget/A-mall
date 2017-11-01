<template>
    <div class="hostMarket">
      <div class="title">
       热门市场
      </div>
      <div class="wrapper">
      <ul>
        <li v-for="item in homePage.hostMarket">
          <img :src="item.image">
          <span class="description">{{item.title}}</span>
        </li>
      </ul>
    </div>
    </div>
</template>

<script>
    export default {
      props: {
        homePage: {
          type: Object
        }
      },
    }
</script>

<style lang="less" scoped>
.hostMarket{
  width: 100%;
  height: 417px;
  margin-top: 10px;
  .title{
    text-align: center;
  }
  .wrapper{
    width: 100%;
    ul{
      width: 100%;
      height: 100%;
      li{
        float: left;
        width: 25%;
        height: 100px;
        text-align: center;
        img{
         width: 80%;
          height: 70%;
        }
        .description{
          font-size: 14px;
        }
      }
    }
  }
}
</style>
