<template>
	<div class="box">
		father2
		<son2></son2>
		<son3></son3>
	</div>
</template>

<script>
import son2 from "./son2.vue"
import son3 from "./son3.vue"
	
	components:{
		son2,
		son3
	}
</script>

<style>
	.box{
		width: 200px;
		height: 100px;
	}
</style>