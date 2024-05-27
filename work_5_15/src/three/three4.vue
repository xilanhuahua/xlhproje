<template>
   <div id="threeContainer">
    <canvas id="three"></canvas>
  </div>
</template>
<script lang="ts" setup>
	import * as THREE from "three";
    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
	import { onMounted } from "vue";
	import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
 	import { log } from "three/examples/jsm/nodes/Nodes.js";
	//  import { DRACOLoader, DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
	const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xeeeeee)
document.body.appendChild( renderer.domElement );
// scene.background=new THREE.Color('#ccc')
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


/**
 * 
 * 加载压缩
 */
// const draCOLoader=new DRACOLoader()

/**
 * 
 * 光线发射器
 * 
 */
const raycaster=new THREE.Raycaster()
const rayOrigin=new THREE.Vector3(-3,0,0)

const rayDirection=new THREE.Vector3(1,0,0)
rayDirection.normalize
raycaster.set(rayOrigin,rayDirection) 
const intersect=raycaster.intersectObject(cube)
/**
 * 
 * 加载模型
 * 
 */
const gltfLoader=new GLTFLoader()
console.log(gltfLoader)
gltfLoader.load(
'/src/mod/Soldier.glb',
(gltf)=>{
console.log('success')
console.log(gltf)
scene.add(gltf.scene.children[0])
},()=>{
console.log('progress')
},()=>{
console.log('err')
}
)

/**
 * 鼠标事件
 * 
 */
const mouse=new THREE.Vector2()
window.addEventListener('mousemove',(event)=>{
	mouse.x=event.clientX/window.innerWidth*2-1
	mouse.y=event.clientY/window.innerHeight*2-1
	console.log(mouse.x)
	console.log(mouse.y)
})


let sphereGeometry = new THREE.SphereGeometry(2,20,20); //半径，圆滑程度
let sphereMaterial = new THREE.MeshLambertMaterial({ color: 'blue' }); //材质颜色
let sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
sphere.position.x = 2; //三轴的位置
sphere.position.y = 2;
sphere.position.z = 1;
scene.add(sphere);
//控制器
// const controls=new OrbitControls(camera,renderer,domElement)
//网格地板
const gridHelper= new THREE.GridHelper(10,10)
gridHelper.material.opacity=0.2
gridHelper.material.transparent=true
scene.add(gridHelper)
//添加坐标系
const AxesHelper=new THREE.AxesHelper(5)
scene.add(AxesHelper)
camera.position.set(-7, 13, -7)
camera.lookAt(20, 0, 20)
// 创建轨道控制器
// / 添加轨道控制器 camera:相机  renderer:渲染器)
// 设置相机控件轨道控制器OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
// 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
controls.addEventListener('change', function () {
	// console.log('移动')
	// console.log('camera.position',camera.position);
    renderer.render(scene, camera); //执行渲染操作
});//监听鼠标、键盘事件
// 设置带阻尼的惯性
controls.enableDamping = true
// 设置阻尼的大小
controls.dampingFactor = 0.05
// 设置自动旋转
controls.autoRotate = true
// 鼠标、键盘事件

// camera.lookAt(10,10,15)
// 添加环境光
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// 添加半球光
const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000, 0.3);
scene.add(hemisphereLight);

// 添加平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);


const loader = new GLTFLoader();

loader.load( '../models/pterodactyl/scene.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );


function animate() {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	controls.update();
	renderer.render( scene, camera );

}
onMounted(()=>{
	document.getElementById("threeContainer")?.appendChild(renderer.domElement);
	animate();
})
/**
 * 添加鼠标点击事件
 * 
 */
window.addEventListener('click',()=>{
	
})
	 
</script>

<style lang="less">
	#three {
	  width: 100vw;
	  height: 100vh;
	  position: absolute;
	  top: 0;
	  left: 0;
	}
</style>