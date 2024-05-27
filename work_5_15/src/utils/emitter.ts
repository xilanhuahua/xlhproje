import { log } from 'console'
import mitt from 'mitt'
//调用mitt获取emitter,emitter可以绑定事件，触发事件
const emitter=mitt()
//绑定事件
emitter.on('test1',()=>{
	console.log('test1触发');
})

emitter.on('test2',()=>{
	console.log('test2触发了');
})
// setTimeout(()=>{
// 	emitter.emit('test1')
// 	emitter.emit('test2')
// },3000)
export default emitter