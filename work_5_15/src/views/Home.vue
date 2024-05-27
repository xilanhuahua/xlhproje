<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-21 14:39:24
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-23 14:43:49
 * @FilePath: \git\git_test1\work_5_15\src\views\Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<div>
	<three4></three4>
	<!-- <three1></three1> -->
	<!-- <three3></three3> -->
	<!-- <three2></three2>  -->
	</div>
</template>

<script setup lang="ts" name="Home">
import three1 from '../three/three1.vue';
import three2 from '../three/three2.vue';
import three4 from '../three/three4.vue';
import three3 from '../three/three3.vue'
// import login from '../components/login.vue';

import { ref } from 'vue';
import router from '../router';
	components:{
			three1
			three2
			three4
			three3
		}
let a=ref(0)
</script>

<style>

</style>