$(function() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();

  renderer.setClearColor(0x000000);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // var axis = new THREE.AxisHelper(20);
  // scene.add(axis);

  var cubeGeometry = new THREE.BoxGeometry(10, 10, 10);
  var cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xdddddd,
    wireframe: true
  });
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

  cube.position.x = 33;
  cube.position.y = 20;
  cube.position.z = 10;

  scene.add(cube);

  camera.position.x = 60;
  camera.position.y = 60;
  camera.position.z = 30;

  camera.lookAt(scene.position);

  renderer.render(scene, camera);
  $("#webGL-container").append(renderer.domElement);

});