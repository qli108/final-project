let camera, scene, renderer, controls;

let time = 0;

function init() {
	scene = new THREE.Scene();

	let w = window.innerWidth;
	let h = window.innerHeight;

	// cube map
	scene.background = new THREE.CubeTextureLoader()
		.setPath('../images/Hong Kong/')
		.load( ['0004.png', '0002.png', '0006.png', '0005.png', '0003.png', '0001.png']);

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
	video.play();

	var video2 = document.getElementById( 'video2' );
	var texture2 = new THREE.VideoTexture( video2 );
	video2.play();

	var video3 = document.getElementById( 'video3' );
	var texture3 = new THREE.VideoTexture( video3 );
	video3.play();
	
	var video4 = document.getElementById( 'video4' );
	var texture4 = new THREE.VideoTexture( video4 );
	video4.play();

	var video5 = document.getElementById( 'video5' );
	var texture5 = new THREE.VideoTexture( video5 );
	video5.play();

	var video6 = document.getElementById( 'video6' );
	var texture6 = new THREE.VideoTexture( video6 );
	video6.play();

	var video7 = document.getElementById( 'video7' );
	var texture7 = new THREE.VideoTexture( video7 );
	video7.play();

	// Cylinder 
	let CylinderGeometry = new THREE.CylinderGeometry(30, 30, 70, 300);
	let material = new THREE.MeshBasicMaterial( {map: texture} );
	let Cylinder = new THREE.Mesh(CylinderGeometry, material);
	Cylinder.position.x = -150;
	Cylinder.position.z = 50;
	scene.add(Cylinder);

	let CylinderGeometry2 = new THREE.CylinderGeometry(30, 30, 70, 30);
	let material2 = new THREE.MeshBasicMaterial( {map: texture2} );
	let Cylinder2 = new THREE.Mesh(CylinderGeometry2, material2);
	Cylinder2.position.x = -100;
	Cylinder2.position.z = -50;
	scene.add(Cylinder2);

	let CylinderGeometry3 = new THREE.CylinderGeometry(30, 30, 70, 30);
	let material3 = new THREE.MeshBasicMaterial( {map: texture3} );
	let Cylinder3 = new THREE.Mesh(CylinderGeometry3, material3);
	Cylinder3.position.x = -50;
	Cylinder3.position.z = 50;
	scene.add(Cylinder3);

	let CylinderGeometry4 = new THREE.CylinderGeometry(30, 30, 70, 30);
	let material4 = new THREE.MeshBasicMaterial( {map: texture4} );
	let Cylinder4 = new THREE.Mesh(CylinderGeometry4, material4);
	Cylinder4.position.x = 0;
	Cylinder4.position.z = -50;
	scene.add(Cylinder4);

	let CylinderGeometry5 = new THREE.CylinderGeometry(30, 30, 70, 30);
	let material5 = new THREE.MeshBasicMaterial( {map: texture5} );
	let Cylinder5 = new THREE.Mesh(CylinderGeometry5, material5);
	Cylinder5.position.x = 50;
	Cylinder5.position.z = 50;
	scene.add(Cylinder5);

	let CylinderGeometry6 = new THREE.CylinderGeometry(30, 30, 70, 30);
	let material6 = new THREE.MeshBasicMaterial( {map: texture6} );
	let Cylinder6 = new THREE.Mesh(CylinderGeometry6, material6);
	Cylinder6.position.x = 100;
	Cylinder6.position.z = -50;
	scene.add(Cylinder6);

	let CylinderGeometry7 = new THREE.CylinderGeometry(30, 30, 70, 30);
	let material7 = new THREE.MeshBasicMaterial( {map: texture7} );
	let Cylinder7 = new THREE.Mesh(CylinderGeometry7, material7);
	Cylinder7.position.x = 150;
	Cylinder7.position.z = 50;
	scene.add(Cylinder7);

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

	time += 0.0009;
	camera.position.x = Math.sin(time) * 500;
	camera.position.z = Math.cos(time) * 15;
    camera.position.y = Math.cos(time) ;

	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	controls.update(); 

}

init();
animate();

