<template>
  <div class="contents">
    <ul ref="carouselFigures" class="wrapper">
      <li>
        <img :src="homePage.carouselFigure[4].image_800" class="images"/>
      </li>
      <li v-for="item in homePage.carouselFigure.concat([homePage.carouselFigure[0]])">
        <img :src="item.image_800" class="images">
      </li>
    </ul>
    <ul>
      <li v-for="index in homePage.carouselFigure"></li>
    </ul>
    <div class="container">
      <ul class="box">
        <li v-for="items in homePage.three">
          <p class="title" :style="{color:items.titleColor}">{{items.title}}</p>
          <p class="description">{{items.description}}</p>
          <img :src="items.image" class="picture">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapMutations} from 'vuex'
  export default {
    props: {
      homePage: {
        type: Object
      }
    },
    data() {
      return {
        timer: false
      }
    },
    methods: {
      ...mapActions(['startHeaderTransition', 'linstenTranstionEnd', 'transitionAgain']),
      ...mapMutations(['RECEIVE_LENGTH']),
      callback() {
        this.transitionAgain({obj: this.$refs.carouselFigures, modules: 'carouselFigure'})
      },
    },
    mounted(){
      if(this.$store.state.carouselFigure.timer>0){
        this.$store.state.carouselFigure.index=0
        let obj = this.$refs.carouselFigures
        this.startHeaderTransition(obj)
        this.linstenTranstionEnd({obj, callback: this.callback})
      }
    },
    watch: {
      homePage(val) {
        if (val.carouselFigure) {
          this.$nextTick(() => {
            this.RECEIVE_LENGTH(val.carouselFigure.length)
            console.log(val.carouselFigure)
            let obj = this.$refs.carouselFigures
            this.startHeaderTransition(obj)
            this.linstenTranstionEnd({obj, callback: this.callback})
          })
        }
      }
    },
  }
</script>

<style lang="less" scoped>
  .contents {
    width: 100%;
    height: 160px;
    margin-top: 10px;
    .wrapper {
      width: 1000%;
      margin-left: -100%;
      li {
        float: left;
        width: 10%;
        .images {
          width: 100%;
          height: 160px;
        }
      }
    }
    .container {
      width: 100%;
      height: 93px;
      .box {
        display: flex;
        width: 100%;
        height: 100%;
        li {
          flex: 1;
          height: 82%;
          margin-top: 10px;
          text-align: center;
          border-right: 2px solid rgba(245, 245, 245, 0.8);
          .title {
            font-size: 14px;
          }
          .description {
            margin-top: 5px;
            font-size: 13px;
            color: gray;
          }
          .picture {
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }
</style>
