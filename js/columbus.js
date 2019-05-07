let camera, scene, renderer, controls;

let time = 0;

function init() {
	scene = new THREE.Scene();

	let w = window.innerWidth;
	let h = window.innerHeight;

	// cube map
	scene.background = new THREE.CubeTextureLoader()
		.setPath('../images/Columbus/')
		.load( ['posx.png', 'negx.png', 'posy.png', 'negy.png', 'posz.png', 'negz.png']);

	camera = new THREE.PerspectiveCamera(60, w/h, 100, 3000);
	camera.position.z = 1000; // back out a bit
	camera.position.y = 100; // move up a bit
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
	video5.play();

	var video6 = document.getElementById( 'video6' );
	var texture6 = new THREE.VideoTexture( video6 );

	var video7 = document.getElementById( 'video7' );
	var texture7 = new THREE.VideoTexture( video7 );
	video7.play();

	var video8 = document.getElementById( 'video8' );
	var texture8 = new THREE.VideoTexture( video8 );
	video8.play();

	// Plane 
	let PlaneGeometry = new THREE.PlaneGeometry(100, 50, 32);
	let material = new THREE.MeshBasicMaterial( {map: texture} );
	let Plane = new THREE.Mesh(PlaneGeometry, material);
	Plane.position.x = -50;
	Plane.position.y = -95;
	scene.add(Plane);

	let PlaneGeometry2 = new THREE.PlaneGeometry(100, 50, 32);
	let material2 = new THREE.MeshBasicMaterial( {map: texture2} );
	let Plane2 = new THREE.Mesh(PlaneGeometry2, material2);
	Plane2.position.x = 55;
	Plane2.position.y = -95;
	scene.add(Plane2);

	let PlaneGeometry3 = new THREE.PlaneGeometry(100, 50, 32);
	let material3 = new THREE.MeshBasicMaterial( {map: texture3} );
	let Plane3 = new THREE.Mesh(PlaneGeometry3, material3);
	Plane3.position.x = -50;
	Plane3.position.y = -40;
	scene.add(Plane3);

	let PlaneGeometry4 = new THREE.PlaneGeometry(100, 50, 32);
	let material4 = new THREE.MeshBasicMaterial( {map: texture4} );
	let Plane4 = new THREE.Mesh(PlaneGeometry4, material4);
	Plane4.position.x = 55;
	Plane4.position.y = -40;
	scene.add(Plane4);

	let PlaneGeometry5 = new THREE.PlaneGeometry(100, 50, 32);
	let material5 = new THREE.MeshBasicMaterial( {map: texture5} );
	let Plane5 = new THREE.Mesh(PlaneGeometry5, material5);
	Plane5.position.x = -50;
	Plane5.position.y = 15;
	scene.add(Plane5);

	let PlaneGeometry6 = new THREE.PlaneGeometry(100, 50, 32);
	let material6 = new THREE.MeshBasicMaterial( {map: texture6} );
	let Plane6 = new THREE.Mesh(PlaneGeometry6, material6);
	Plane6.position.x = 55;
	Plane6.position.y = 15;
	scene.add(Plane6);

	let PlaneGeometry7 = new THREE.PlaneGeometry(100, 50, 32);
	let material7 = new THREE.MeshBasicMaterial( {map: texture7} );
	let Plane7 = new THREE.Mesh(PlaneGeometry7, material7);
	Plane7.position.x = -50;
	Plane7.position.y = 70;
	scene.add(Plane7);

	let PlaneGeometry8 = new THREE.PlaneGeometry(100, 50, 32);
	let material8 = new THREE.MeshBasicMaterial( {map: texture8} );
	let Plane8 = new THREE.Mesh(PlaneGeometry8, material8);
	Plane8.position.x = 55;
	Plane8.position.y = 70;
	scene.add(Plane8);

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

	time += 0.0002;
	camera.position.x = Math.sin(time) * 400;
	camera.position.z = Math.cos(time) * 200;
    camera.position.y = Math.cos(time) * 100;

	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	controls.update(); 

}

init();
animate();

