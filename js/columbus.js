let camera, scene, renderer, controls;

let time = 0;

function init() {
	scene = new THREE.Scene();

	let w = window.innerWidth;
	let h = window.innerHeight;

	// cube map
	scene.background = new THREE.CubeTextureLoader()
		.setPath('../images/Columbus/')
		.load( ['0004.png', '0002.png', '0006.png', '0005.png', '0001.png', '0003.png']);

	camera = new THREE.PerspectiveCamera(30, w/h, 60, 3000);
	camera.position.z = 2000; // back out a bit
	camera.position.y = 60; // move up a bit
	scene.add(camera);

	let light = new THREE.AmbientLight(0xfffffff, 1); 
	light.position.set(1,1,1); 
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

	// Box 
	let BoxGeometry = new THREE.BoxGeometry(60, 30, 10);
	let material = new THREE.MeshBasicMaterial( {map: texture} );
	let Box = new THREE.Mesh(BoxGeometry, material);
	Box.position.x = -30;
	Box.position.y = -95;
	Box.position.z = 10;
	scene.add(Box);

	let BoxGeometry2 = new THREE.BoxGeometry(60, 30, 10);
	let material2 = new THREE.MeshBasicMaterial( {map: texture2} );
	let Box2 = new THREE.Mesh(BoxGeometry2, material2);
	Box2.position.x = 55;
	Box2.position.y = -95;
	scene.add(Box2);

	let BoxGeometry3 = new THREE.BoxGeometry(60, 30, 10);
	let material3 = new THREE.MeshBasicMaterial( {map: texture3} );
	let Box3 = new THREE.Mesh(BoxGeometry3, material3);
	Box3.position.x = -30;
	Box3.position.y = -40;
	scene.add(Box3);

	let BoxGeometry4 = new THREE.BoxGeometry(60, 30, 10);
	let material4 = new THREE.MeshBasicMaterial( {map: texture4} );
	let Box4 = new THREE.Mesh(BoxGeometry4, material4);
	Box4.position.x = 55;
	Box4.position.y = -40;
	Box4.position.z = 10;
	scene.add(Box4);

	let BoxGeometry5 = new THREE.BoxGeometry(60, 30, 10);
	let material5 = new THREE.MeshBasicMaterial( {map: texture5} );
	let Box5 = new THREE.Mesh(BoxGeometry5, material5);
	Box5.position.x = -30;
	Box5.position.y = 15;
	Box5.position.z = 10;
	scene.add(Box5);

	let BoxGeometry6 = new THREE.BoxGeometry(60, 30, 10);
	let material6 = new THREE.MeshBasicMaterial( {map: texture6} );
	let Box6 = new THREE.Mesh(BoxGeometry6, material6);
	Box6.position.x = 55;
	Box6.position.y = 15;
	scene.add(Box6);

	let BoxGeometry7 = new THREE.BoxGeometry(60, 30, 10);
	let material7 = new THREE.MeshBasicMaterial( {map: texture7} );
	let Box7 = new THREE.Mesh(BoxGeometry7, material7);
	Box7.position.x = -30;
	Box7.position.y = 70;
	scene.add(Box7);

	let BoxGeometry8 = new THREE.BoxGeometry(60, 30, 10);
	let material8 = new THREE.MeshBasicMaterial( {map: texture8} );
	let Box8 = new THREE.Mesh(BoxGeometry8, material8);
	Box8.position.x = 55;
	Box8.position.y = 70;
	Box8.position.z = 10;
	scene.add(Box8);

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

	time += 0.0008;
	camera.position.x = Math.sin(time) * 600;
	camera.position.z = Math.cos(time) * 600;
    camera.position.y = Math.cos(time) * 10;

	requestAnimationFrame(animate);
	renderer.render(scene, camera);

	controls.update(); 

}

init();
animate();

