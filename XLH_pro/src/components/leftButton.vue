<template>
<div class="box">
    <div class="box_button_list">
        <div v-for="item in list.buttonlist" :key="item.id">
    <button :class="[selectindex===item.id ? 'is_but' : '']"  @click="bu_click($event)">{{ item.text }}</button>
        </div>
    </div>
</div>    
</template>

<script lang="ts" setup>
import {defineProps, ref} from 'vue'
interface button_face{
    id: number;
  text: string;
}
 let list=defineProps({
    buttonlist: {
    type:Array as ()=>button_face[],
    required: true,
    default: () => []
  },
 })
 let selectindex=ref(0)
// console.log(list[0])
// methods: {
//     clickEvent(e) {
 
//     #获取你当前点击的元素
//     e.target 
 
//     #获得你绑定事件的元素
//     e.currentTarget 
 
//     #获得点击元素的前一个元素
//     e.currentTarget.previousElementSibling.innerHTML
 
//     #获得点击元素中的class属性
//     e.currentTarget.className
 
//     #获得点击元素的第一个子元素
//     e.currentTarget.firstElementChild
 
//     # 获得点击元素的下一个元素
//     e.currentTarget.nextElementSibling
 
//     # 获得点击元素中id为string的元素
//     e.currentTarget.getElementById("string")
 
//     # 获得点击元素的string属性
//     e.currentTarget.getAttributeNode('string')
 
//     # 获得点击元素的父级元素
//     e.currentTarget.parentElement
 
//     # 获得点击元素的前一个元素的第一个子元素的HTML值
//     e.currentTarget.previousElementSibling.firstElementChild.innerHTML
 
//     }
//   },
// function bu_click(item:button_face){
//  selectindex.value=item.id
//  console.log('select的值是'+selectindex.value)
// }
function bu_click(e:any){
    e.target.style.color='pink'
}
</script>

<style lang="less">
.box_button_list{
    display: flex;
    flex-flow: column;
    button{
        margin-left: 1vh;
        margin-right: 1vh; ;
        height: 5vh;
        border-style: none;
        text-align: left;
        border-radius: 2px;
        padding-left: 2vh;
        font-size: 15px;
        font-weight: 700;
        color: rgb(136, 140, 147);
    }
    button:hover{
        cursor:pointer;
        color: rgb(255, 255, 255);
        background-color:rgb(28, 38, 52);
    }
    font-family:'Courier New', Courier, monospace;
    
}
.isbut{
    color: rgb(255, 255, 255);
}
</style>