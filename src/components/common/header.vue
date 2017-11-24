<template>
  <div class="douban-header">
      <div class="douban-header-top">
          <a href="#" class="logo">豆瓣电影</a>
          <div class="douban-search">
              <mt-search
                    v-model="value"
                    placeholder="搜索">
              </mt-search>
          </div>
      </div>
  </div>
</template>
<script>
import { Search } from 'mint-ui'
import Vue from 'vue'
Vue.component(Search.name, Search)
export default {
  data: function () {
    return {
      value: ''
    }
  }
}
</script>
<style lang="less" scoped>
    .douban-header {
        
        .douban-header-top {
            
            margin:0 100px;
            .logo {
                text-decoration:none;
                color: #27a;
                font-size: 30px;
                font-weight: bold;
                line-height: 75px;
            }
            .douban-search {
                width:60%;
                height:100%;
                float:right;
                .mint-search {
                    height:100%;
                }
            }
        }
    }
</style>


