import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
const Three = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    ); //wont work if position is more than 1000 and less than 0.1
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Set up the sphere geometry and material
    const geometry = new THREE.BoxGeometry(1, 1, 1); // Width, height, and depth of the cube
    const material = new THREE.MeshStandardMaterial({ color: "#008000" });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera.position.z = 5;

    // Add lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    scene.add(light);

    renderer.render(scene, camera);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    const loop = () => {
      renderer.render(scene, camera);
      light.rotateX(0.1);
      window.requestAnimationFrame(loop);
      controls.update();
    };
    loop();
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  });

  return (
    <>
      <h1>cube</h1>
      <div ref={mountRef} className="ball" />
    </>
  );
};

export default Three;
