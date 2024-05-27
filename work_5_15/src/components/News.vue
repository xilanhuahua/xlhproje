<template>
  <div class="news">
    <ul>
      <li v-for="item in list" :key="item.id">
        // 导航区
        <RouterLink :to="'/news/Detail'">{{ item.title }}</RouterLink>
      </li>
    </ul>
    // 新闻展示区
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'

  const list = reactive([
    {
      id: '1233',
      title: '大师大师大',
      content: '西蓝花'
    },
    {
      id: '12',
      title: '大11111111111111',
      content: '西蓝花2'
    },
    {
      id: 'cdscdscds',
      title: 'cdscsdc',
      content: '西蓝花3'
    }
  ])
</script>

<style>
</style>