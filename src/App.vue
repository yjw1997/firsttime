<template>
  <div id="app">
    <!-- <router-view></router-view> -->
      <div class="myMneu"><MyMenu></MyMenu></div>
        <MyNav></MyNav>
    <MyTab></MyTab>
    <!-- <Infor></Infor> -->
  </div>
</template>

<script>
import MyNav from './components/myNav'
import MyMenu from './components/myMenu'
import MyTab from './components/myTab'
import Infor from './components/infor'

export default {
  name: 'App',
  components: {
    MyNav, MyMenu,MyTab,Infor
  }
}
</script>

<style lang="less" scoped>
#app {
  overflow: hidden;
}
</style>
