import * as THREE from 'three'

//创建场景
const scene = new THREE.Scene()

//相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

//渲染器
const renderer = new THREE.WebGLRenderer()

//设置画布大小
renderer.setSize(window.innerWidth, window.innerHeight)

//加入到body
document.body.appendChild(renderer.domElement)

//第二步,创建几何体.

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
//加入到场景
scene.add(cube)

//设置相机位置
camera.position.z = 5

//渲染循环
function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

animate()
