var canvas1 = document.getElementById('c1');
var ctx1 = canvas1.getContext("2d");
var canvas2 = document.getElementById('c2');
var ctx2 = canvas2.getContext("2d");
var canvas3 = document.getElementById('c3');
var ctx3 = canvas3.getContext("2d");

let width1;
let height1;

// get ratio of the resolution in physical pixels to the resolution in CSS pixels
let pxScale = window.devicePixelRatio;

// CANVAS 2
let width;
let height;

let image = document.getElementById('bellezza');

function setup() {
  // fixed canvas size
  width = canvas.width;
  height = canvas.height;

  // set the CSS display size
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';

  // set the number of display pixels, scaled for device resolution
  canvas.width = width * pxScale;
  canvas.height = height * pxScale;

  // normalize the coordinate system
  ctx.scale(pxScale, pxScale);
}

function draw2() {
  ctx.drawImage(image, 0, 0, 600, 400);

  let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imageData.data;

  // gray scale
  for (let i = 0; i < data.length; i += 4) {
    var grey = (0.2126 * data[i]) + (0.7152 * data[i + 1]) + (0.0722 * data[i + 2]);
    data[i] = grey;
    data[i + 1] = grey;
    data[i + 2] = grey;
    }

  ctx.putImageData(imageData, 0, 0);
}

setup();

image.addEventListener('load', draw);



// CANVAS 2
let width2;
let height2;

let image2 = document.getElementById('columbus');

function setup2() {
  // fixed canvas size
  width2 = canvas2.width;
  height2 = canvas2.height;

  // set the CSS display size
  canvas2.style.width = width2 + 'px';
  canvas2.style.height = height2 + 'px';

  // set the number of display pixels, scaled for device resolution
  canvas2.width = width2 * pxScale;
  canvas2.height = height2 * pxScale;

  // normalize the coordinate system
  ctx2.scale(pxScale, pxScale);
}

function draw2() {
  ctx2.drawImage(image, 0, 0, 600, 400);

  let imageData = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
  let data = imageData.data;

  // gray scale
  for (let i = 0; i < data.length; i += 4) {
    var grey = (0.2126 * data[i]) + (0.7152 * data[i + 1]) + (0.0722 * data[i + 2]);
    data[i] = grey;
    data[i + 1] = grey;
    data[i + 2] = grey;
    }

  ctx2.putImageData(imageData, 0, 0);
}

setup2();

image.addEventListener('load', draw2);


// CANVAS 3
let width3;
let height3;

let image = document.querySelector('mood');

function setup3() {
  // fixed canvas size
  width3 = canvas3.width;
  height3 = canvas3.height;

  // set the CSS display size
  canvas3.style.width = width3 + 'px';
  canvas3.style.height = height3 + 'px';

  // set the number of display pixels, scaled for device resolution
  canvas3.width = width3 * pxScale;
  canvas3.height = height3 * pxScale;

  // normalize the coordinate system
  ctx3.scale(pxScale, pxScale);
}

function draw3() {
  ctx3.drawImage(image, 0, 0, 600, 400);

  let imageData = ctx3.getImageData(0, 0, canvas3.width, canvas3.height);
  let data = imageData.data;

  // gray scale
  for (let i = 0; i < data.length; i += 4) {
    var grey = (0.2126 * data[i]) + (0.7152 * data[i + 1]) + (0.0722 * data[i + 2]);
    data[i] = grey;
    data[i + 1] = grey;
    data[i + 2] = grey;
    }

  ctx3.putImageData(imageData, 0, 0);
}

setup3();

image.addEventListener('load', draw3);

