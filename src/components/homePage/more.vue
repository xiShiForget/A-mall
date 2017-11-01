<template>
    <div class="container">
      <div class="background"></div>
      <div class="top">
        <span class="text">快抢.距结束</span>
        <span class="day">{{this.day}}</span>:<span class="hour">{{this.hour}}</span>:<span class="minute">{{this.minute}}</span>:<span class="second">{{this.second}}</span>
        <img src="https://s10.mogucdn.com/p1/160719/upload_ifrwkntcmi4diolehezdambqhayde_84x20.png" class="moreIcon">
      </div>
      <div class="wrapper" ref="wrappers">
        <ul>
          <li v-for="item in homePage.ten">
            <img :src="item.img" width="70" height="70"/>
            <span class="title">{{item.title}}</span>
            <div class="price">
              <span class="newPrice">¥{{item.salePrice}}</span><span class="oldPrice">¥{{item.price}}</span>
            </div>
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
        data(){
            return{
               day:0,
              hour:0,
              minute:0,
              second:0
            }
        },
      created(){
        this.$nextTick(()=> {
          this.countDown();
          this.timer();
          document.addEventListener('touchmove',this.scroll,{passive:true})
          this.scroll()
        })
      },
      methods:{
      countDown(){
        let endDate = new Date('2017/12/30 17:08:00')
        let now = new Date()
        let totalseconds =parseInt((endDate.getTime() - now.getTime())/1000);
        this.day = parseInt(totalseconds/(60*60*24));
        this.hour = parseInt(totalseconds/3600)%24;
        this.minute = parseInt(totalseconds/60)%60;
        this.second = totalseconds%60
        return totalseconds
      },
      timer(){
          let self = this
          let timers=setInterval(function () {
            let time = self.countDown()
            if(time<=0){
                clearInterval(timers)
            }
          },1000)
      },
      scroll(){
          if(!this.Scroll){
            this.Scroll = new IScroll(this.$refs.wrappers,{
              click:true,
              scrollX:true
            })
          }
          else {
            this.Scroll.refresh()
          }
        }
    },
    }
</script>

<style lang="less" scoped>
.container{
  width: 100%;
  height: 191px;
  margin-top: 100px;
  .background{
    width: 100%;
    height: 8px;
    background: rgba(246,246,246,0.8);
  }
  .top{
    margin-top: 15px;
    .text{
      margin-left: 5px;
      font-size: 14px;
    }
    .day,.hour,.minute,.second{
      text-align: center;
      display: inline-block;
      width: 20px;
      height: 18px;
      border-radius: 4px;
      background: black;
      color: white;
    }
    .moreIcon{
      position: absolute;
      width: 60px;
      height: 15px;
      right: 15px;

    }
  }
  .wrapper{
    width: 100%;
    height: 150px;
    margin-top:10px;
    ul{
      width:300%;
      height: 100%;
      li{
        float: left;
        text-align: center;
        width: 10%;
        height: 100%;
        .title{
         display: inline-block;
          margin-top: 6px;
          width: 90%;
          height: 20px;
          font-size: 13px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: rgba(128,128,128,0.7);
        }
        .price{
         .newPrice{
           font-size: 15px;
           color: rgb(240, 20, 20);
         }
          .oldPrice{
            text-decoration: line-through;
            font-size: 13px;
            color: rgb(147, 153, 159);
          }
        }
      }
    }
  }

}
</style>
