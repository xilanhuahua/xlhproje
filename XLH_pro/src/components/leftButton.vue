<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-31 09:10:07
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-06-04 21:17:51
 * @FilePath: \xlhproje\XLH_pro\src\components\leftButton.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%
-->
<template>
  <div class="box">
    <div class="box_button_list">
      <button class="firstbutton">{{ firstbutton?[0].text}}</button>
      <div v-for="item in buttonlist" :key="item.id">
        <button :class="[selectindex === item.id ? 'isbut' : '']" @click="bu_click(item, $event)">{{ item.text}}</button>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup name="leftbtton">
import { defineProps, ref } from 'vue'
interface button_face {
  id: number;
  text: string;
}
const { buttonlist, firstbutton } = defineProps({
  buttonlist: {
    type: Array as () => button_face[],
    required: true,
    default: () => []
  },
  firstbutton:{
    type:Array as () => button_face[]
  }
});
let selectindex = ref(0)

function bu_click(item: button_face, e: any) {
  selectindex.value = item.id
  console.log('点击的按钮的 id 是：', item.id)
  e.target.class = 'isbut'
}
</script>

<style lang="less">
.box_button_list {
  display: flex;
  flex-flow: column;
  button {
    margin-left: 1vh;
    margin-right: 1vh;
    height: 5vh;
    width: 90%;
    border-style: none;
    text-align: left;
    border-radius: 2px;
    padding-left: 2vh;
    font-size: 15px;
    font-weight: 700;
    color: rgb(136, 140, 147);
  }

  button:hover {
    cursor: pointer;
    color: rgb(255, 255, 255);
    background-color: rgb(28, 38, 52);
  }

  font-family:'Courier New',
  Courier,
  monospace;

}

button.isbut {
  background-color: rgb(28, 38, 52);
  color: rgb(255, 255, 255);
}

button.firstbutton {
  background-color: rgb(28, 38, 52);
  color: #fff;
}
</style>
