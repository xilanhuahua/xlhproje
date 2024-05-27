/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-15 21:33:35
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-23 08:49:25
 * @FilePath: \work_5_15\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { createRouter,createWebHashHistory } from "vue-router";
import News from '../components/News.vue'
import Detail from '../components/Detail.vue'
import about from '../components/about.vue'
import three1 from "../three/three1.vue";
import three2 from "../three/three2.vue";
import three3 from "../three/three3.vue";

const router = createRouter({
	history:createWebHashHistory(),
  routes:[
	// {
// 	  path:'/home',
// 	  component:Home,
// 	  name:''
// },
// {
// path:'/first',
// 	component:three1Vue
// },
// {
// path:'/second',
// 	component:three2Vue
// },
// {
// 	path:'/about',
// 	component:about
// },
// {
// 	path:'/News',
// 	component:News,
// 	children:[{
// 		path:'/Detail',
// 		component:Detail,
// 		props(routes){
// 			return routes.query
// 		}
		
// 	}]
// }
{
	path:'/',
	component:three1
},{
	path:'/three2',
	component:three2
},
{
	path:'/three3',
	component:three3
}
  ]
})
//暴露路由
export default router

