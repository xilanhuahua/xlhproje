<template>
	
		元素的值为：？<div>{{name}}</div>？
	
</template>
<script lang="ts">
	export default {
		name: 'Home',
	}
</script>
<script setup lang="ts">
	import { ref } from 'vue';
	let name=ref('zhange')
	setTimeout(()=> {
		name.value='new'
	}, 1000);
	
</script>
<style>
	
	
	
</style>
