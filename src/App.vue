<template>
  <div id="app">
    <Cheader></Cheader>
    <transition name="fade">
        <keep-alive exclude="moviesDetail">
            <router-view/>
        </keep-alive>
    </transition>
    
  </div>
</template>

<script>
import Cheader from './components/common/header.vue';
export default {
  name: 'app',
  components:{
      'header':Cheader
  }
}
</script>

<style lang="less">

</style>
