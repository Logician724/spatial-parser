let canvas = document.querySelector('#scratch-canvas');
fitToContainer(canvas);
let stage;
let avatar;
let apple;

function fitToContainer(canvas) {
  // Make it visually fill the positioned parent
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  // ...then set the internal size to match
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

window.addEventListener('resize', fitToContainer(canvas));

function init() {
  stage = new createjs.Stage("scratch-canvas");
  stage.update();
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
