<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-27 20:06:53
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-28 15:13:41
 * @FilePath: \xlhproje\xlh_pro\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <HeadText></HeadText>
  <div class="outbox">
    <LeftMod></LeftMod>
   <div>
  <HeadButton></HeadButton>
  <MainMod></MainMod>
   </div>
   
  </div>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

* {
  background-color: rgb(17, 24, 39);
}
.outbox{
  display: flex;
}
</style>
<script setup lang="ts">
import HeadButton from './components/HeadButton.vue';
import HeadText from './components/HeadText.vue';
import LeftMod from './components/LeftMod.vue';
import MainMod from './components/MainMod.vue';
</script>
