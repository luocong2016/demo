var camera, scene, renderer

var scene2, renderer2

init()
animate()

function init() {
  var frustumSize = 500
  var aspect = window.innerWidth / window.innerHeight

  /*
    options
      left: Number 摄像机视锥体左侧面
      right: Number 摄像机视锥体右侧面
      top: Number 摄像机视锥体上侧面
      bottom: Number 摄像机视锥体下侧面
      near: Number 摄像机视锥体近端面
      far: Number 摄像机视锥体远端面
  */
  camera = new THREE.OrthographicCamera(
    (frustumSize * aspect) / -2,
    (frustumSize * aspect) / 2,
    frustumSize / 2,
    frustumSize / -2,
    1,
    1000
  )

  camera.position.set(-200, 200, 200)

  var controls = new THREE.OrbitControls(camera)

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf0f0f0)

  scene2 = new THREE.Scene()

  /*
    基本材质
    options
      visible: 是否可见
      color: 颜色
      wireframe: 是否渲染线而非面
      side：THREE.FrontSide 正面、THREE.BackSide 反面、THREE.DoubleSide 双面
      map: 贴图
  */
  var material = new THREE.MeshBasicMaterial({
    color: 0x000000,
    wireframe: true,
    wireframeLinewidth: 1,
    side: THREE.DoubleSide
  })

  // left
  createPlane(
    100,
    100,
    'chocolate',
    new THREE.Vector3(-50, 0, 0),
    new THREE.Euler(0, -90 * THREE.Math.DEG2RAD, 0)
  )
  // right
  createPlane(
    100,
    100,
    'saddlebrown',
    new THREE.Vector3(0, 0, 50),
    new THREE.Euler(0, 0, 0)
  )
  // top
  createPlane(
    100,
    100,
    'yellowgreen',
    new THREE.Vector3(0, 50, 0),
    new THREE.Euler(-90 * THREE.Math.DEG2RAD, 0, 0)
  )
  // bottom
  createPlane(
    300,
    300,
    'seagreen',
    new THREE.Vector3(0, -50, 0),
    new THREE.Euler(-90 * THREE.Math.DEG2RAD, 0, 0)
  )

  renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  renderer2 = new THREE.CSS3DRenderer()
  renderer2.setSize(window.innerWidth, window.innerHeight)
  renderer2.domElement.style.position = 'absolute'
  renderer2.domElement.style.top = 0
  document.body.appendChild(renderer2.domElement)

  function createPlane(width, height, cssColor, pos, rot) {
    var element = document.createElement('div')
    element.style.width = width + 'px'
    element.style.height = height + 'px'
    element.style.opacity = 0.75
    element.style.background = cssColor

    // 投像贴平面
    var object = new THREE.CSS3DObject(element)
    console.log(arguments, object)
    object.position.copy(pos)
    object.rotation.copy(rot)
    scene2.add(object)

    // 平面缓冲几何体
    var geometry = new THREE.PlaneBufferGeometry(width, height)
    var mesh = new THREE.Mesh(geometry, material)
    mesh.position.copy(object.position)
    mesh.rotation.copy(object.rotation)
    scene.add(mesh)
  }
}

function animate() {
  requestAnimationFrame(animate)

  renderer.render(scene, camera)
  renderer2.render(scene2, camera)
}
