"use strict";

/*
 * Course: CS 4722/7327
 * Section: 1
 * Name: Nikki Ashaka
 * Professor: Shaw
 * Assignment #: Lab 4
 */

var canvas;
var gl;

var theta = vec3(45, 45, 45);
var thetaLoc;

var vertices = [
    vec3(-0.5, 0.5, 0.5),          // Vertex 1
    vec3(-0.5, -0.5, 0.5),         // Vertex 0
    vec3(0.5, -0.5, 0.5),          // Vertex 3

    vec3(0.5, -0.5, 0.5),          // Vertex 3
    vec3(0.5, 0.5, 0.5),           // Vertex 2
    vec3(-0.5, 0.5, 0.5),          // Vertex 1

    vec3(0.5, 0.5, 0.5),           // Vertex 2
    vec3(0.5, -0.5, 0.5),          // Vertex 3
    vec3(0.5, -0.5, -0.5),         // Vertex 0

    vec3(0.5, -0.5, -0.5),         // Vertex 0
    vec3(0.5, 0.5, -0.5),          // Vertex 6
    vec3(0.5, 0.5, 0.5),           // Vertex 2


   vec3(0.5, -0.5, 0.5),          // Vertex 3
    vec3(-0.5, -0.5, 0.5),         // Vertex 0
    vec3(-0.5, -0.5, -0.5),        // Vertex 4

    vec3(-0.5, -0.5, -0.5),        // Vertex 4
    vec3(0.5, -0.5, -0.5),         // Vertex 0
    vec3(0.5, -0.5, 0.5),          // Vertex 3

    vec3(0.5, 0.5, -0.5),          // Vertex 6
    vec3(-0.5, 0.5, -0.5),         // Vertex 5
    vec3(-0.5, 0.5, 0.5),          // Vertex 1

    vec3(-0.5, 0.5, 0.5),          // Vertex 1
    vec3(0.5, 0.5, 0.5),           // Vertex 2
    vec3(0.5, 0.5, -0.5),          // Vertex 6


    vec3(-0.5, -0.5, -0.5),        // Vertex 4
    vec3(-0.5, 0.5, -0.5),         // Vertex 5
    vec3(0.5, 0.5, -0.5),          // Vertex 6


    vec3(0.5, 0.5, -0.5),          // Vertex 6
    vec3(0.5, -0.5, -0.5),         // Vertex 0
    vec3(-0.5, -0.5, -0.5),        // Vertex 4

    vec3(-0.5, 0.5, -0.5),         // Vertex 5
    vec3(-0.5, -0.5, -0.5),        // Vertex 4
    vec3(-0.5, -0.5, 0.5),         // Vertex 0

    vec3(-0.5, -0.5, 0.5),         // Vertex 0
    vec3(-0.5, 0.5, 0.5),          // Vertex 1
    vec3(-0.5, 0.5, -0.5),         // Vertex 5








];

var vertexColors = [

    vec4(1.0, 0.0, 0.0, 1.0),  // red.....1
    vec4(0.0, 0.0, 0.0, 1.0),  // black  0
    vec4(0.0, 1.0, 0.0, 1.0),


    vec4(0.0, 1.0, 0.0, 1.0),
    vec4(1.0, 1.0, 0.0, 1.0),
    vec4(1.0, 0.0, 0.0, 1.0),  // red.....1


    vec4(1.0, 1.0, 0.0, 1.0),  // yellow....2
    vec4(0.0, 1.0, 0.0, 1.0),  // green....3
    vec4(0.0, 1.0, 1.0, 1.0),   // cyan.....7

    vec4(0.0, 1.0, 1.0, 1.0),   // cyan.....7
    vec4(1.0, 1.0, 1.0, 1.0),  // white....6
    vec4(1.0, 1.0, 0.0, 1.0),  // yellow....2

    vec4(0.0, 1.0, 0.0, 1.0),  // green....3
    vec4(0.0, 0.0, 0.0, 1.0),  // black
    vec4(0.0, 0.0, 1.0, 1.0),  // blue....4

    vec4(0.0, 0.0, 1.0, 1.0),  // blue....4
    vec4(0.0, 1.0, 1.0, 1.0),   // cyan.....7
    vec4(0.0, 1.0, 0.0, 1.0),  // green....3

    vec4(1.0, 1.0, 1.0, 1.0),  // white....6
    vec4(1.0, 0.0, 1.0, 1.0),  // magenta...5
    vec4(1.0, 0.0, 0.0, 1.0),  // red.....1

    vec4(1.0, 0.0, 0.0, 1.0),  // red.....1
    vec4(1.0, 1.0, 0.0, 1.0),  // yellow....2
    vec4(1.0, 1.0, 1.0, 1.0),  // white....6

    vec4(0.0, 0.0, 1.0, 1.0),  // blue....4
    vec4(1.0, 0.0, 1.0, 1.0),  // magenta...5
    vec4(1.0, 1.0, 1.0, 1.0),  // white....6

    vec4(1.0, 1.0, 1.0, 1.0),  // white....6
    vec4(0.0, 1.0, 1.0, 1.0),   // cyan.....7
    vec4(0.0, 0.0, 1.0, 1.0),  // blue....4

    vec4(1.0, 0.0, 1.0, 1.0),  // magenta...5
    vec4(0.0, 0.0, 1.0, 1.0),  // blue....4
    vec4(0.0, 0.0, 0.0, 1.0),  // black

    vec4(0.0, 0.0, 0.0, 1.0),  // black
    vec4(1.0, 0.0, 0.0, 1.0),  // red.....1
    vec4(1.0, 0.0, 1.0, 1.0),  // magenta...5

































   





    






    //vec4(0.0, 0.0, 0.0, 1.0),  // black
    //vec4(1.0, 0.0, 0.0, 1.0),  // red.....1
    //vec4(1.0, 1.0, 0.0, 1.0),  // yellow....2
    //vec4(0.0, 1.0, 0.0, 1.0),  // green....3
    //vec4(0.0, 0.0, 1.0, 1.0),  // blue....4
    //vec4(1.0, 0.0, 1.0, 1.0),  // magenta...5
    //vec4(1.0, 1.0, 1.0, 1.0),  // white....6
    //vec4(0.0, 1.0, 1.0, 1.0),   // cyan.....7
];

window.onload = function init() {
    canvas = document.getElementById("gl-canvas");

    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) { alert("WebGL isn't available"); }

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    gl.enable(gl.DEPTH_TEST);

    //
    //  Load shaders and initialize attribute buffers
    //
    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);


    // array element buffer for vertex indices
    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);

    var vPosition = gl.getAttribLocation(program, "vPosition");
    gl.vertexAttribPointer(vPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);


    var cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertexColors), gl.STATIC_DRAW);


    var vColor = gl.getAttribLocation(program, "vColor");
    gl.vertexAttribPointer(vColor, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vColor);




    thetaLoc = gl.getUniformLocation(program, "theta");
    gl.uniform3fv(thetaLoc, theta);




   

    // vertex array attribute buffer code goes here


    // color array attribute buffer code goes here


    // thetaLoc uniform variable code goes here

    render();
}

function render() {

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    //theta[axis] += 1;
    //gl.uniform3fv(thetaLoc, theta);

    gl.drawArrays(gl.TRIANGLES, 0, vertices.length); 

    requestAnimFrame(render);
    // render code goes here
}