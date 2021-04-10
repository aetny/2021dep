<template>
  <div id="app" :style="'--height: ' + Height">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <!-- 烤串式 -->
    <transition name="fade" mode="out-in">
      <keep-alive include="" exclude="">
        <router-view></router-view>
      </keep-alive>
    </transition>
    <!-- v-model="active" -->
    <van-tabbar route v-if="needBottomBar">
      <van-tabbar-item replace to="/" icon="home-o">Home</van-tabbar-item>
      <van-tabbar-item replace to="/about" icon="search">About</van-tabbar-item>
      <van-tabbar-item replace to="/home" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">标签</van-tabbar-item>
      <van-tabbar-item replace to="/login" icon="home-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "App",
  data() {
    return {
      // active: 0,
      needBottomBar: !/login/.test(this.$route.name),
      Height: /login/.test(this.$route.name) ? "0px" : "50px",
    };
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  //这个页面一直存在啊！！！
  beforeRouteEnter(to, from, next) {
    console.log(to, from);
    next((vm) => {
      console.log(vm.needBottomBar);
    });
  },
  //我学费了
  watch: {
    $route(to, from) {
      this.needBottomBar = !/login/.test(to.path);
      this.Height = /login/.test(this.$route.name) ? "0px" : "50px";
    },
  },
};
</script>
<style lang="less" scoped>
#app {
  width: 100%;
  height: 100vh;
  // display: flex;
  // flex-direction: column;
  // justify-content: center; //子元素水平居中
  // align-items: center; //子元素垂直居中
  & > div:first-child {
    height: calc(100vh - var(--height));
    overflow: hidden;
    // flex: 1;
  }
}
</style>
