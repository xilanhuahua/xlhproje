<template>
	<div class="box" >
		父组件:{{car}}--{{toy}}
		<!-- <son :car="car" :sendtoy="gettoy"></son> -->
		<!-- //自定义事件用于子组件传递数据给父组件 -->
		<!-- <son @haha="xrz"></son> -->
		<!-- 使用emitter实现组件之间的传参 -->
		<son ></son>
	</div>
</template>

<script setup lang="ts" >
	import { ref } from 'vue';
    import emitter from '../utils/emitter';
    import son from './son.vue'
	Comment:{
		son
	}
	let toy=ref('')
	let car=ref('汽车')
	function gettoy(value:string){
		toy.value=value
	}
	function xrz(value:string){
		toy.value=value
		console.log('xrz',value)
	}
	emitter.on('sendtoy',(value:any)=>{
		
	})
</script>

<style>
	.box{
		width: 200px;
		height: 100px;
		background-color: aquamarine;
	}
</style>