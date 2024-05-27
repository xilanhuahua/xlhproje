<template>
	<div class="box">
		子组件{{stringcar.car}}----{{toy}}
	</div>
	
	<!-- <button @click="sendtoy(toy)"> 传送子组件的信息</button> -->
	<!-- <button @click="emit('haha',toy)">发送数据</button> -->
	<button @click="emitter.emit('send-toy',toy)"></button>
</template>

<script lang="ts" setup>
	import {defineProps, ref} from 'vue'
    import emitter from '../utils/emitter';
	
	let toy=ref('奥特曼')
	let stringcar= defineProps(['car','sendtoy'])
	//声明事件
  let  emit=defineEmits(['haha'])
	console.log(stringcar)
</script>

<style>
	.box{
		width: 100px;
		height: 50px;
		background-color: bisque;
	}
</style>