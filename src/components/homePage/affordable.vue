<template>
    <div class="container">
      <div class="background"></div>
      <div class="description">
        <span class="text">超实惠-促销直达</span>
      </div>
      <div class="wrapper">
        <ul>
          <li v-for="item in homePage.boon">
            <h3 class="title">{{item.title}}</h3>
            <p class="viceTitle" :style="{color:item.subtitleColor}">{{item.viceTitle}}</p>
            <img :src="item.image" class="picture"/>
          </li>
        </ul>
      </div>
      <div class="moreGoods" ref="moreGoods">
        <ul>
          <li v-for="items in homePage.hostSeller">
            <img :src="items.image" class="pictures"/>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
    export default {
      props: {
        homePage: {
          type: Object
        }
      },
      created(){
        this.$nextTick(()=> {
          document.addEventListener('touchmove',this.scroll,{passive:true})
          this.scroll()
        })
      },
      methods:{
        scroll(){
          if(!this.Scroll){
            this.Scroll = new IScroll(this.$refs.moreGoods,{
              click:true,
              scrollX:true
            })
          }
          else {
            this.Scroll.refresh()
          }
        }
      }
    }
</script>

<style lang="less" scoped>
.container{
  width: 100%;
  height: 452px;
  .background{
    width: 100%;
    height: 8px;
    background: rgba(246,246,246,0.8);
  }
  .description{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: white;
    font-size: 14px;
  .text{
    margin-left: 8px;
  }
  }
  .wrapper{
    ul{
      position: relative;
      display: flex;
      li{
        .title{
          margin-top: 20px;
          font-size: 15px;
          color: rgba(0,0,0,0.8);
          font-weight: 700;
        }
        .viceTitle{
          margin-top: 8px;
          font-size: 14px;
        }
      }
    }
    ul>:first-child{
     position: absolute;
      height: 173px;
      width: 50%;
      text-align: center;
      border: 1px solid gainsboro;
      .picture{
        width: 60%;
        height: 67%;
      }
    }
    ul>:nth-child(2){
      position: absolute;
      left: 50%;
      width: 50%;
      height: 87px;
      border: 1px solid gainsboro;
      .title{
        margin-top: 20px;
        font-size: 15px;
        color: rgba(0,0,0,0.8);
        font-weight: 700;
        margin-left: 10px;
      }
      .viceTitle{
        margin-top: 8px;
        font-size: 14px;
        margin-left: 10px;
      }
     .picture{
       position: absolute;
       width: 65px;
       height: 80px;
       right: 4px;
       top: 6px;
     }
    }
    ul>:nth-child(3){
      position: absolute;
      left: 50%;
      width: 50%;
      height: 87px;
      top: 87px;
      border: 1px solid gainsboro;
      .title{
        margin-top: 20px;
        font-size: 15px;
        color: rgba(0,0,0,0.8);
        font-weight: 700;
        margin-left: 10px;
      }
      .viceTitle{
        margin-top: 8px;
        font-size: 14px;
        margin-left: 10px;
      }
      .picture{
        position: absolute;
        width: 65px;
        height: 80px;
        right: 4px;
        top: 6px;
      }
    }
    ul>:nth-child(4), ul>:nth-child(5), ul>:nth-child(6){
      flex: 1;
      width: 33%;
      height: 137px;
      margin-top: 175px;
      text-align: center;
      border: 1px solid gainsboro;
      border-bottom: none;
      .title{
        margin-top: 20px;
        font-size: 15px;
        color: rgba(0,0,0,0.8);
        font-weight: 700;
      }
      .viceTitle{
        margin-top: 8px;
        font-size: 14px;

      }
      .picture{
        width: 80px;
        height: 80px;
      }
    }
  }
  .moreGoods{
    width: 100%;
    height: 90px;
    background-color: rgba(220,220,200,0.5);
    ul{
      display: flex;
      width: 240%;
      li{
        flex: 1;
        width: 10%;
        margin-top: 10px;
      .pictures{
        width: 90%;
        height: 100%;
      }
      }
    }
    ul>:first-child{
      margin-left: 10px;
    }
  }
}
</style>
