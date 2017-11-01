<template>
    <div class="content" ref="wrapper">
      <ul>
        <li class="container">
          <top></top>
          <carouserl-figure :homePage="homePage"></carouserl-figure>
          <more :homePage="homePage"></more>
          <affordabable :homePage="homePage"></affordabable>
          <host-market :homePage="homePage"></host-market>
          <like :homePage="homePage"></like>
        </li>
      </ul>
    </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  import top from './top.vue'
  import carouserlFigure from './carouselFigure.vue'
  import more from './more.vue'
  import affordabable from './affordable.vue'
  import hostMarket from './hostMarket.vue'
  import like from './like.vue'
    export default {
      props: {
        homePage: {
          type: Object
        }
      },
      components:{
        top:top,
        carouserlFigure:carouserlFigure,
        more:more,
        affordabable:affordabable,
        hostMarket:hostMarket,
        like:like
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
            this.Scroll = new IScroll(this.$refs.wrapper,{
              click:true,
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
.content{
  position: fixed;
  z-index: -20;
  top: 0;
  height: 92%;
  overflow: hidden;
  box-sizing: border-box;
.container{
  width: 100%;
  height: 100%;
}
}
</style>
