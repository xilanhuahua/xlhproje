<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-28 14:39:48
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-06-07 10:10:53
 * @FilePath: \xlhproje\xlh_pro\src\components\MainMod.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- 页面中间的版块 -->
<template>
  <div class="main">
    <div class="text1">
      <span v-show="isshou" class="im">#</span>
      <h1>{{ text2 }}</h1>
    </div>
    <div class="text1">
      <span v-show="isshou" class="im">#</span>
      <h3>{{ text }}</h3>
    </div>
    <div class="head_content" v-show="isshou">
      <div> <img :src="head_button.imgsrc" alt="" srcset="">{{ head_button.nametext }} </div>
      <NuxtLink to="https://www.baidu.com">跳转到百度官网</NuxtLink>

      <div> <button @click="click_button()"><img src="../assets/播放.png" alt="播放" srcset=""></button><button><img src="../assets/笔.png" alt="" srcset=""></button></div>
    </div>
    <br>
      <pre>
       <code>
         <span class="keyword">function</span> <span class="function-name">greet</span>(<span class="parameter">name</span>) {
           <span class="keyword">return</span> <span class="string">'Hello, '</span> + <span class="parameter">name</span> + <span class="string">'!'</span>;
         }
         <span class="keyword">console</span>.log(<span class="function-name">greet</span>(<span class="string">'world'</span>));
       </code>
      </pre>
  </div>
</template>

<script setup lang="ts" name="MainMod">
/**
 * 解决兼容性报错问题
 */
/* eslint-disable */
// eslint-disable-next-line vue/no-setup-props-destructure
import { onBeforeMount, ref } from 'vue';
import emitter from '../utils/emitter';
import { headbuttons } from '../Types/headbutton';
let text = ref('')
let text2 = ref('')
let isshou = ref(false)
let head_button = ref<headbuttons>({
  nametext: '',
  id: 0,
  imgsrc: '',
  isbut: false
});
onBeforeMount(() => {
  emitter.on('event', (t: string) => {
    if (t != '')
      isshou.value = true
    text.value = t
  })
  emitter.on('event2', (t: string) => {
    text2.value = t
  })
  emitter.on('Sendheadtext', (t: headbuttons) => {
    head_button.value = t
    console.log(t.imgsrc)
    console.log(head_button.value.imgsrc)
  })
})
 function click_button(){

 }
</script>

<style lang="less">
.main {
  color: #fff;
  background-color: rgb(17, 24, 39);
  height: 1000px;
  width: 1200px;
  border: rgb(55, 65, 81) 2px solid;
}

.text1 {
  margin: 3vh;
  display: flex;
  align-items: center;

  .im {
    margin: 10px;
    font-size: 50px;
    opacity: 0;
  }
}

.text1:hover {
  .im {
    opacity: 1;
  }
}

.head_content {
  position: relative;
  left: 7%;
  display: flex;
  justify-content: space-between;
  width: 50vw;

  button {
    border-style: none;
  }

  button:hover {
    cursor: pointer;
    background-color: #fff;
  }
}

.pre {
  background-color: rgb(13, 17, 23);
}

pre {
  position: relative;
  left: 7%;
  background-color: #070404;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  border-style: none;
  width: 50vw;
}

code {
  color: #333;
}

.keyword {
  color: blue;
}

.comment {
  color: green;
}

.string {
  color: red;
}
</style>