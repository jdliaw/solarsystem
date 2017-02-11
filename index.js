"use strict";

var canvas;
var gl;

window.onload = function init() {
  canvas = document.getElementById("gl-canvas");

  // setup webgl
  gl = WebGLUtils.setupWebGL(canvas);
  if (!gl) {
    alert("WebGL isn't available.");
  }

  cube(); // populate points for a cube
  outline(); // populate points for cube edges

  gl.viewport( 0, 0, canvas.width, canvas.height );
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.enable(gl.DEPTH_TEST);

  program = initShaders(gl, "vertex-shader", "fragment-shader");
  gl.useProgram(program);




  render();
}

function render() {
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}