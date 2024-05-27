<template>
	<div class="father">
		<h2>父组件</h2>
		<div class="content">
				<CategoryVue title="标题1">
					<span>你好</span>
					<template v-slot:s1>s1插槽</template>
				</CategoryVue>
				<CategoryVue title="标题2"></CategoryVue>
				<CategoryVue title="标题3"></CategoryVue>
		</div>
	</div>
</template>
<script lang="ts" setup>
import CategoryVue from "./Category.vue"
	
</script>

<style>
	
	.father{
		background-color: silver;
		padding: 20px;
		
	}
	.content{
		display: flex;
		justify-content: space-between;
	}
</style>