import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import emitter from './utils/emitter';
import { createPinia } from 'pinia';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const pinia = createPinia();

const app = createApp(App);

app.config.globalProperties.$THREE = THREE;
app.config.globalProperties.$OrbitControls = OrbitControls;
app.config.globalProperties.$GLTFLoader = GLTFLoader;

app.use(router).use(pinia).mount('#app');
