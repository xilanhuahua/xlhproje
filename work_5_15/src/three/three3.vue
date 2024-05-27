<template>
  <div ref="containerRef" class="container">
  </div>
</template>
<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {
  AxesHelper, BoxGeometry,
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
const planeGeometry = new PlaneGeometry(100,50);
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


//绘制立方体，设置板子的长宽高分别是4,4,4
const cubeGeometry1 = new BoxGeometry(4,4,4)
const cubeMaterial1 = new MeshLambertMaterial({color:0xff0000,wireframe:false})
const cube1 = new Mesh(cubeGeometry1,cubeMaterial1)
cube1.castShadow = true
cube1.position.set(-10,2,2)
scene.add(cube1)



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


//控制物体运动
let step = 0;

function renderScene() {
  step += 0.04;

  cube.rotation.x += 0.02;
  cube.rotation.y += 0.02;
  cube.rotation.z += 0.02;

  cube1.rotation.x += -0.02;
  cube1.rotation.y += -0.02;
  cube1.rotation.z += -0.02;
  cube1.scale.set((2 + 1 * Math.cos(step)), (2 + 1 * Math.cos(step)), (2 + 1 * Math.cos(step)));

  //控制物体
  sphere.position.x = 20 + 10 * Math.cos(step); //cos为数据当中的函数 余弦函数
  sphere.position.y = 2 + 10 * Math.abs(Math.sin(step));  //abs为绝对值  sin为正弦函数

  requestAnimationFrame(renderScene)
  renderer.render(scene,camera)
}
renderScene()

onMounted(()=>{
  //设置摄像头朝向
  containerRef.value?.appendChild(renderer.domElement)
  renderer.render(scene,camera)
})

</script>
<style scoped>

</style>

