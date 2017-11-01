<template>
  <div id="app">
    <router-view :homePage="homePage"></router-view>
  </div>
</template>
<script>
  import bottom from './components/nav.vue'
export default {
  name: 'app',
  data(){
      return{
        homePage:{},
        classify:{}
      }
  },
  components: {
   "bottom":bottom
  },
  created(){
      let self = this
    self.$axios.get('/api/homePage')
      .then((res)=>{
          res= res.data
        if(res.error ===0){
              self.homePage = res.data
          console.log(self.homePage.bottom)
        }
      })
      .catch((error)=>{
          alert(error)
      })


    self.$axios.get('/api/classify')
      .then((res)=>{
        res= res.data
        if(res.error ===0){
          self.classify = res.data
        }
      })
      .catch((error)=>{
        alert(error)
      })
  }
}
</script>

<style>

</style>
