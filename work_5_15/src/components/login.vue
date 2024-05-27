<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-21 16:55:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-21 17:04:21
 * @FilePath: \git\git_test1\work_5_15\src\components\login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div class="box">
  <template>
    <el-input v-model="input" style="width: 240px" placeholder="Please input" />
  </template>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>

<style>
.box{
    width: 300px;
    height: 100px;
    background-color: palegreen;
}
</style>