<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-28 14:38:52
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-06-04 20:57:10
 * @FilePath: \xlhproje\xlh_pro\src\components\LeftMod.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- 页面的左边版块 -->
<template>
    <div class="out">
        <leftButton :buttonlist="buttonlist" :firstbutton="firstbutton"></leftButton>
    </div>
</template>

<script lang="ts" setup>
import leftButton from './leftButton.vue';
let firstbutton=[{
    text: "响应式",
    id: 1
}];
let buttonlist = [
{
    text: "声明",
    id: 1
},
{
    text: "更新",
    id: 2
}, {
    text: "计算属性",
    id: 3
}]
</script>

<style>
.out {
    width: 400px;
    background-color: rgb(17, 24, 39);
    border: rgb(55, 65, 81) 2px solid;
    border-left-style: none;
}
</style>