<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-21 14:39:24
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-21 17:05:01
 * @FilePath: \git\git_test1\work_5_15\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<!-- <rote></rote> -->
  <div class="app">
	  <!-- <router-view></router-view> -->
<HomeVue></HomeVue>	
<!-- <template>
	<router-link to="/">第一个场景</router-link>
	<router-link to="/three2">第二个场景</router-link>
	<router-link to="/three3">第三个场景</router-link>
</template> -->
  </div>
</template>
<script lang="ts" setup>
import { RouterView } from 'vue-router';
import HomeVue from './views/Home.vue';
// import rote from './components/rote.vue'
import { ref } from 'vue'
const input = ref('')
  name: "App"
</script>

<style>
.box {
  width: 300px;
  height: 200px;
  background-color: pink;
  font-size: 30px;
}

* {
  margin: auto;
  padding: auto;
}

.main-content {
  width: 800px;
  height: 400px;
  border: 2px black solid;
}

.link {
  background-color: palegoldenrod;
  margin: 20px;
}
.app{
  background-color: #FBAB7E;
  background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
}
.Home{
  width: 100%;
  height: 100%;
}
</style>
