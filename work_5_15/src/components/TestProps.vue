<template>
	<div>
		Props测试<ul>
			<li v-for= "(item ,index) in list" :key="index"> {{item.name}}--{{item.age}}</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>

import {type Person} from '../Types/Person'
import {defineProps,withDefaults} from 'vue'

	withDefaults(defineProps<{list?:Person}>(),
	{
		list:()=>[{
			name:'初始值',
			age: 12
		}]
	}
	)
</script>

<style>
</style>