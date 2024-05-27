<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-05-22 10:42:49
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-05-23 08:59:34
 * @FilePath: \work_5_15\src\three\three1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	
</template>

<script setup lang="ts">
	import * as THREE from "three";
import { log } from "three/examples/jsm/nodes/Nodes.js";
	// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
	const scene=new THREE.Scene();
	const geometry=new THREE.BoxGeometry(50,50,50);
	const material = new THREE.MeshLambertMaterial({
	  color: 0x0000ff,
	});
	//创建网格模型对象并将几何体和材质放入模型中
	const mesh = new THREE.Mesh(geometry, material);
	//设置模型位置 xyz
	mesh.position.set(0, 10, 0);
	//将网格模型放入3D场景中
	scene.add(mesh);
	//创建点光源(颜色，光照强度)
	const pointLight = new THREE.PointLight(0xffffff, 2.0);
	//设置光源不随距离衰减
	pointLight.decay = 0.0;
	//点光源位置xyz
	pointLight.position.set(40, 50, 30);
	scene.add(pointLight);
	//创建环境光
	const ambient = new THREE.AmbientLight(0xffffff, 0.1);
	scene.add(ambient);
	//定义画布大小
	const width = window.innerWidth;
	const height = window.innerHeight;
	//创建一个透视投影相机 (30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面)
	const camera = new THREE.PerspectiveCamera(20, width / height, 1, 3000);
	//设置相机位置
	camera.position.set(400, 400, 400);
	//设置相机观察对象(默认值：0，0，0)
	camera.lookAt(mesh.position);
	// 创建渲染器对象
	const renderer = new THREE.WebGLRenderer();
	//设置渲染区域尺寸(像素px)
	renderer.setSize(width, height);
	//设置画布背景色
	// renderer.setClearColor(0xb9d3ff, 1);
	//执行渲染操作
	renderer.render(scene, camera);
	//将生成的Canvas画布放入页面中
	document.body.appendChild(renderer.domElement);
	window.addEventListener('keyup',()=>{
		console.log('4')
		mesh.position.set(20, 10, 0);
	})
</script>

<style>
</style>