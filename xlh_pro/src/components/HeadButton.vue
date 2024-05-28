<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-28 14:53:46
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-28 15:27:55
 * @FilePath: \xlhproje\xlh_pro\src\components\HeadButton.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div class="outbox">
<ul class="buttonlist">
    <button v-for="(item) in StringMod" :key="item.id">{{ item.nametext }}</button>
</ul>
</div>  
</template>

<script setup lang="ts">
import { ref } from "vue";

let StringMod=ref([
    {
        nametext: "Vue3",
        id: 1
    },{
        nametext : "Vue2",
        id : 2
    },{
        nametext : "Svelte",
        id : 3
    },{
        nametext : "React",
        id : 4
    },{
        nametext : "Angular",
        id : 5
    },{
        nametext : "Lit",
        id : 6
    },{
        nametext : "Ember",
        id : 7
    },{
        nametext : "SolidJS",
        id : 8
    },{
        nametext : "Alpine",
        id : 9
    }
])


</script>

<style lang="less" scoped>
 .outbox{
    background-color:rgb(17, 24, 39);
    border: rgb(55, 65, 81) 2px solid;
    display: flex;
    justify-content:space-around;
    align-content: center;
 }
 .buttonlist{
    display: flex;
    flex-wrap: nowrap;
 }
 button{
    margin-right: 20px;
    width: 100px;
    height: 45px;
    border-color:rgb(71, 107, 151) ;
    border-radius: 10px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 15px;
   
 }
</style>
