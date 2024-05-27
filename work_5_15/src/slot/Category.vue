<template>
	<div class="category">
		<h2>{{props.title}}</h2>
		<slot name="s1"></slot>
		<slot name="s2"></slot>
		<slot name="s3"></slot>
	</div>
</template>

<script lang="ts" setup>
	let props=defineProps(['title'])
</script>

<style>
	.category{
		background-color: skyblue;
		border-radius: 10px ;
		box-shadow:  0 0 10px;
		padding: 10px;
		width: 200px;
		height: 300px;
	}
	h2{
		background-color: orange;
	}
</style>