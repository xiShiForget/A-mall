<template>
    <div class="like">
      <div class="text">
    <p class="title">猜你喜欢</p>
      </div>
      <div class="wrapper">
        <ul>
          <li v-for="(item,index) in homePage.wall">
              <img :src="item.img" >
            <span v-if="item.props[0]">{{item.props[0]}}</span><span v-if="item.props[1]">{{item.props[1]}}</span><span v-if="item.props[2]">{{item.props[2]}}</span><span v-if="item.props[3]">{{item.props[3]}}</span><span v-if="item.props[4]">{{item.props[4]}}</span>
            <div class="price">¥{{item.price}}</div>
            <div class="collection" @click ="actives(index,homePage.wall)">
              <span class="num">{{item.cfav}}</span><img src="../../image/icon/xingxing.png" class="likes" v-show="item.hasSimilarity"><img src="../../image/icon/xingxings.png"  v-show="!item.hasSimilarity" class="likes">
            </div>
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
      methods:{
        actives(index,arr){
          let i = index
          arr[i].hasSimilarity=!arr[i].hasSimilarity
          if(arr[i].hasSimilarity){
            arr[i].cfav--
          }else {
            arr[i].cfav++
          }
        }
      }
    }
</script>

<style lang="less" scoped>
.like{
  position: relative;
  background-color:rgba(220,220,220,0.3);
  .text{
    text-align: center;
    .title{
      display: inline-block;
      margin-top: 20px;
      font-size: 17px;
    }
  }
  .wrapper{
    margin-top: 10px;
    ul{
      width: 100%;
      height: 7592px;
      li{
        position: relative;
        float: left;
        margin-left: 2.8%;
        margin-top: 2.5%;
        width: 46%;
        height: 370px;
        background-color: white;
        img{
          width: 100%;
          height: 77%;
        }
        span{
          display: inline-block;
          height: 20px;
          margin: 3px 6px;
          font-size: 13px;
          text-align: center;
          line-height: 20px;
          background-color: rgba(220,220,220,0.4);
          color: gray;
        }
        .price{
          position: absolute;
          width: 50%;
          bottom: 10px;
          left: 3%;
          font-weight: 700;
        }
        .collection{
          position: absolute;
          bottom: 4px;
          right: 10px;
          .num{
            background-color: white;
            font-size: 13px;
          }
          .likes{
            left: 25px;
            width: 20px;
            height: 18px;
            vertical-align: middle;
          }
          .Highlight{
            background-color: yellow;
          }
        }
      }
    }

  }

}
</style>
