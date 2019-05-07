let camera, scene, renderer, controls;

let time = 0;

function init() {
	scene = new THREE.Scene();

	let w = window.innerWidth;
	let h = window.innerHeight;

	// cube map
	scene.background = new THREE.CubeTextureLoader()
		.setPath('images/Columbus/')
		.load( ['posx.png', 'negx.png', 'posy.png', 'negy.png', 'posz.png', 'negz.png']);

	camera = new THREE.PerspectiveCamera(60, w/h, 100, 25000);
	camera.position.z = 2000; // back out a bit
	camera.position.y = 10; // move up a bit
	scene.add(camera);

	let light = new THREE.AmbientLight(0xfffffff, 1); // color, intensity
	light.position.set(1, 1, 1); // location x, y, z
	scene.add(light);

	// video as texture
	var video = document.getElementById( 'video' );
	var texture = new THREE.VideoTexture( video );

	var video2 = document.getElementById( 'video2' );
	var texture2 = new THREE.VideoTexture( video2 );

	var video3 = document.getElementById( 'video3' );
	var texture3 = new THREE.VideoTexture( video3 );
	
	var video4 = document.getElementById( 'video4' );
	var texture4 = new THREE.VideoTexture( video4 );

	var video5 = document.getElementById( 'video5' );
	var texture5 = new THREE.VideoTexture( video5 );

	var video6 = document.getElementById( 'video6' );
	var texture6 = new THREE.VideoTexture( video6 );

	
	// sphere 
	let sphereGeometry = new THREE.SphereGeometry(50, 50, 50);
	let material = new THREE.MeshBasicMaterial( {map: texture} );
	let sphere = new THREE.Mesh(sphereGeometry, material);
	scene.add(sphere);

	let sphereGeometry2 = new THREE.SphereGeometry(50, 50, 50);
	let material2 = new THREE.MeshBasicMaterial( {map: texture2} );
	let sphere2 = new THREE.Mesh(sphereGeometry2, material2);
	sphere2.position.y = -150;
	scene.add(sphere2);

	let sphereGeometry3 = new THREE.SphereGeometry(50, 50, 50);
	let material3 = new THREE.MeshBasicMaterial( {map: texture3} );
	let sphere3 = new THREE.Mesh(sphereGeometry3, material3);
	sphere3.position.y = 150;
	scene.add(sphere3);

	let sphereGeometry4 = new THREE.SphereGeometry(50, 50, 50);
	let material4 = new THREE.MeshBasicMaterial( {map: texture4} );
	let sphere4 = new THREE.Mesh(sphereGeometry4, material4);
	sphere4.position.x = 150;
	scene.add(sphere4);

	let sphereGeometry5 = new THREE.SphereGeometry(50, 50, 50);
	let material5 = new THREE.MeshBasicMaterial( {map: texture5} );
	let sphere5 = new THREE.Mesh(sphereGeometry5, material5);
	sphere5.position.x = 150;
	sphere5.position.y = -150;
	scene.add(sphere5);

	let sphereGeometry6 = new THREE.SphereGeometry(50, 50, 50);
	let material6 = new THREE.MeshBasicMaterial( {map: texture6} );
	let sphere6 = new THREE.Mesh(sphereGeometry6, material6);
	sphere6.position.x = 150;
	sphere6.position.y = 150;
	scene.add(sphere6);

	renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  	renderer.setSize(w, h);
  	renderer.shadowMap.enabled = true;

  	controls = new THREE.OrbitControls(camera, renderer.domElement);

  	document.body.appendChild(renderer.domElement);

  	window.addEventListener( 'resize', onWindowResized, false );
}

function onWindowResized() {
	renderer.setSize( window.innerWidth, window.innerHeight );
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
}


function animate() {

	time += 0.005;
	camera.position.x = Math.sin(time) * 400;
	camera.position.z = Math.cos(time) * 200;
    camera.position.y = Math.cos(time) * 100;

	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	controls.update(); 

}

init();
animate();

