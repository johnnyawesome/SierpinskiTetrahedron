/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict";

let size = 70;
let rot = 0;

function setup() {
  createCanvas(800, 800, WEBGL);
  angleMode(DEGREES);
}

function draw() {

  background(0);
  rotateY(rot);
  rot += 0.5;
  createTetrahedron(size);
}

function createTetrahedron(size) {

  noStroke();
  fill(0, 255, 0, 160);

  if (size > 3) {

    sphere(size);

    size /= 2;

    //Top
    push();
    translate(0, -size * 5, 0);
    sphere(size);
    createTetrahedron(size);
    pop();

    //Left
    push();
    translate(-size * 4, size * 2, -size * 3);
    sphere(size);
    createTetrahedron(size);
    pop();

    //Right
    push();
    translate(size * 4, size * 2, -size * 3);
    sphere(size);
    createTetrahedron(size);
    pop();

    //Front
    push();
    translate(0, size * 2, size * 5);
    sphere(size);
    createTetrahedron(size);
    pop();
  }
}