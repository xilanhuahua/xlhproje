<template>
	<template>
		Hello
	</template>
</template>
<script setup lang="ts">
	import { ref } from 'vue';
	let name=ref('zhange')
	setTimeout(()=> {
		name.value='new'
	}, 1000);
	
</script>
<style>
	
	
	
</style>
