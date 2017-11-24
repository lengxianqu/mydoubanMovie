<template>
  <div id="app">
    <v-header></v-header>
    <transition name="fade">
        <keep-alive exclude="moviesDetail">
            <router-view/>
        </keep-alive>
    </transition>
    
  </div>
</template>

<script>
import Cheader from './components/common/header.vue'
export default {
  name: 'app',
  components: {
    'v-header': Cheader
  }
}
</script>

<style lang="less">

</style>
