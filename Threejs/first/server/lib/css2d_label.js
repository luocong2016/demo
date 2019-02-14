var camera, scene, renderer, labelRenderer

var clock = new THREE.Clock()

// 加载器
var textureLoader = new THREE.TextureLoader()

var earth, moon

init()
animate()

function init() {
  var EARTH_RADIUS = 1
  var MOON_RADIUS = 0.27

  // 创建摄像机 - 透视摄像机(PerspectiveCamera)
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  // 设置摄像机位置
  camera.position.set(10, 5, 10)

  // 轨道控制器
  var controls = new THREE.OrbitControls(camera)

  // 创建场景
  scene = new THREE.Scene()

  // 创建灯光 - 平行光(DirectionalLight)
  var dirLight = new THREE.DirectionalLight(0xffffff)
  dirLight.position.set(0, 0, 1)
  // 添加到场景中
  scene.add(dirLight)

  // 创建辅助对象 - 用于简单模拟 3 个坐标轴的对象(红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴)
  var axesHelper = new THREE.AxesHelper(5)
  scene.add(axesHelper)

  // 创建几何 - 球缓冲几何体（SphereBufferGeometry）
  var earthGeometry = new THREE.SphereBufferGeometry(EARTH_RADIUS, 16, 16)

  // 创建材质 - Phong网格材质(MeshPhongMaterial)
  var earthMaterial = new THREE.MeshPhongMaterial({
    specular: 0x333333,
    shininess: 5,
    map: textureLoader.load('textures/planets/earth_atmos_2048.jpg'),
    specularMap: textureLoader.load('textures/planets/earth_specular_2048.jpg'),
    normalMap: textureLoader.load('textures/planets/earth_normal_2048.jpg'),
    normalScale: new THREE.Vector2(0.85, 0.85) /* 创建二维矢量 */
  })
  // 物体 - 网格
  earth = new THREE.Mesh(earthGeometry, earthMaterial)
  scene.add(earth)

  var moonGeometry = new THREE.SphereBufferGeometry(MOON_RADIUS, 16, 16)
  var moonMaterial = new THREE.MeshPhongMaterial({
    shininess: 5,
    map: textureLoader.load('textures/planets/moon_1024.jpg')
  })
  moon = new THREE.Mesh(moonGeometry, moonMaterial)
  scene.add(moon)

  //

  var earthDiv = document.createElement('div')
  earthDiv.className = 'label'
  earthDiv.textContent = '地球'
  earthDiv.style.marginTop = '-1em'
  var earthLabel = new THREE.CSS2DObject(earthDiv)
  earthLabel.position.set(0, EARTH_RADIUS, 0)
  earth.add(earthLabel)

  var moonDiv = document.createElement('div')
  moonDiv.className = 'label'
  moonDiv.textContent = '月球'
  moonDiv.style.marginTop = '-1em'
  var moonLabel = new THREE.CSS2DObject(moonDiv)
  moonLabel.position.set(0, MOON_RADIUS, 0)
  moon.add(moonLabel)

  //

  // 创建渲染器
  renderer = new THREE.WebGLRenderer()
  // 设备像素比
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  labelRenderer = new THREE.CSS2DRenderer()
  labelRenderer.setSize(window.innerWidth, window.innerHeight)
  labelRenderer.domElement.style.position = 'absolute'
  labelRenderer.domElement.style.top = 0
  document.body.appendChild(labelRenderer.domElement)
}

function animate() {
  requestAnimationFrame(animate)

  var elapsed = clock.getElapsedTime()

  moon.position.set(Math.sin(elapsed) * 5, 0, Math.cos(elapsed) * 5)

  renderer.render(scene, camera)
  labelRenderer.render(scene, camera)
}
