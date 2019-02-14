var camera, scene, renderer
var controls

init()
animate()

function init() {
  /*
    透视相机
    options
      fov: Number 摄像机视锥体垂直视野角度
      aspect: Number 摄像机视锥体长宽比
      near: Number 摄像机视锥体近端面
      far: Number 摄像机视锥体远端面
  */
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000
  )

  // 设备方向控制
  controls = new THREE.DeviceOrientationControls(camera)

  scene = new THREE.Scene()

  var sides = [
    {
      url: 'textures/cube/Bridge2/posx.jpg',
      position: [-512, 0, 0],
      rotation: [0, Math.PI / 2, 0]
    },
    {
      url: 'textures/cube/Bridge2/negx.jpg',
      position: [512, 0, 0],
      rotation: [0, -Math.PI / 2, 0]
    },
    {
      url: 'textures/cube/Bridge2/posy.jpg',
      position: [0, 512, 0],
      rotation: [Math.PI / 2, 0, Math.PI]
    },
    {
      url: 'textures/cube/Bridge2/negy.jpg',
      position: [0, -512, 0],
      rotation: [-Math.PI / 2, 0, Math.PI]
    },
    {
      url: 'textures/cube/Bridge2/posz.jpg',
      position: [0, 0, 512],
      rotation: [0, Math.PI, 0]
    },
    {
      url: 'textures/cube/Bridge2/negz.jpg',
      position: [0, 0, -512],
      rotation: [0, 0, 0]
    }
  ]

  // 三维物体
  var cube = new THREE.Object3D()
  scene.add(cube)

  for (var i = 0; i < sides.length; i++) {
    var side = sides[i]

    var element = document.createElement('img')
    element.width = 1026 // 2 pixels extra to close the gap.
    element.src = side.url

    var object = new THREE.CSS3DObject(element)
    object.position.fromArray(side.position)
    object.rotation.fromArray(side.rotation)
    cube.add(object)
  }

  renderer = new THREE.CSS3DRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  //

  window.addEventListener('resize', onWindowResize, false)
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
  requestAnimationFrame(animate)

  controls.update()
  renderer.render(scene, camera)
}
