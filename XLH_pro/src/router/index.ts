/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-27 18:21:25
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-27 18:28:40
 * @FilePath: \xlhproje\XLH_pro\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  }
  // ,
  // {
  //   path: '/main',
  //   component: () => import('../views/main/main.vue')
  // },
  // {
  //   path: '/login',
  //   component: () => import('../views/login/login.vue')
  // }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
