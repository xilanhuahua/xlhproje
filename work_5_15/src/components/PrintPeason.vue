<template>
	<div>
		<h1>
			来自h1的文字
		</h1>
		<h2>当前求和的值为 {{sum}}</h2>
		<button @click="btn">点击我sum的加一</button>
		<personlist :list=personlist></personlist>
		
		
	</div>
	
	
</template>

<script lang="ts" setup>
	import useSum from '../hooks/useSum'
	import {reactive} from 'vue'
	import {Person} from '../Types/Person'
	console.log('来自print页面')
	const {sum,add}=useSum()

	function btn(){
		add()
	}
	let personlist :Person=reactive<Person>([
		{
			name:'dwdasd',
			age:12
		},
		{
			name:'123213',
			age:1
		},
		{
			name:'0000000000',
			age:100
		}
		
	])
	
	components:{
		personlist
	}
</script>

<style>
</style>