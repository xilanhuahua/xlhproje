<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-22 10:56:23
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-23 08:46:36
 * @FilePath: \work_5_15\src\three\three2.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div ref="containerRef" class="container">
   
  </div>
</template>
<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {
  AxesHelper, BoxGeometry,
  Camera,
  Color,
  Mesh,
  MeshBasicMaterial, MeshLambertMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene, SphereGeometry, SpotLight,
  WebGLRenderer
} from "three";

const containerRef = ref<HTMLDivElement>()
//创建场景
const scene = new Scene();
//创建摄像机
const camera = new PerspectiveCamera(45,window.innerWidth / window.innerHeight,0.1,1000)
//设置摄像机位置
camera.position.set(-30,40,30)
//设置摄像机朝向
camera.lookAt(scene.position)

//重置webGL的颜色
const renderer =  new WebGLRenderer();
renderer.setClearColor(new Color(0xeeeeee))
renderer.setSize(window.innerWidth,window.innerHeight)
renderer.shadowMap.enabled = true

const spotLight = new SpotLight(0xffffff)
spotLight.castShadow = true
spotLight.position.set(-40,60,-10)
scene.add(spotLight)

//添加坐标系
const axes = new AxesHelper(20)
scene.add(axes)

//绘制板子，设置板子的宽度为60，设置板子的高度为20
const planeGeometry = new PlaneGeometry(60,20);
const meshBasicMaterial = new MeshLambertMaterial({color:0xcccccc});//设置材质颜色
const plane = new Mesh(planeGeometry,meshBasicMaterial)
plane.receiveShadow = true //设置可以接收阴影
plane.rotation.x = -0.5 * Math.PI;
//plane.position.x = 15
//plane.position.y = 0
//plane.position.z = 0

scene.add(plane)


//绘制立方体，设置板子的长宽高分别是4,4,4
const cubeGeometry = new BoxGeometry(4,4,4)
const cubeMaterial = new MeshLambertMaterial({color:0xff0000,wireframe:false})
const cube = new Mesh(cubeGeometry,cubeMaterial)
cube.castShadow = true
cube.position.set(2,2,2)
scene.add(cube)

//绘制球体，设置球体的半径为4
const sphereGeometry = new SphereGeometry(4)
const sphereMaterial = new MeshLambertMaterial({
  color: 0x7777ff,
  wireframe:false
})

const sphere = new Mesh(sphereGeometry,sphereMaterial)
sphere.castShadow = true
sphere.position.x = 15
sphere.position.y = 4
sphere.position.z = 2
scene.add(sphere)

onMounted(()=>{
  //设置摄像头朝向
  containerRef.value?.appendChild(renderer.domElement)
  renderer.render(scene,camera)
})

</script>
<style scoped>

</style>

