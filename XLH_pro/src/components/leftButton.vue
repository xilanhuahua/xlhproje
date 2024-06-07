<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-31 09:10:07
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-06-06 10:06:59
 * @FilePath: \xlhproje\XLH_pro\src\components\leftButton.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%
-->
<template>
  <div class="box">
    <div class="box_button_list">
      <button class="firstbutton">{{ firstbutton?.[0]?.text }}</button>
      <div v-for="item in buttonlist" :key="item.id">
        <button :class="[selectindex === item.id ? 'isbut' : '']" @click="bu_click(item, $event)">{{
          item.text}}</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup name="leftButton">
/**
 * 解决兼容性报错问题
 */
/* eslint-disable */
// eslint-disable-next-line vue/no-setup-props-destructure
import { defineProps, ref } from 'vue'
import emitter from '../utils/emitter';

interface button_face {
  id: number;
  text: string;
}

let { buttonlist, firstbutton } = defineProps({
  buttonlist: {
    type: Array as () => button_face[],
    required: true,
    default: () => []
  },
  firstbutton: {
    type: Array as () => button_face[]
  }
});
let selectindex = ref(0)

// 改变点击按钮的样式
function bu_click(item: button_face, e: any) {
  selectindex.value = item.id
  e.target.class = 'isbut'
  // 向兄弟组件mainmod传递点击的文字
  emitter.emit('event',item.text)
  emitter.emit('event2',firstbutton![0].text)
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
