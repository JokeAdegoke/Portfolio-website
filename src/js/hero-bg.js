import * as THREE from 'three';

let scene, camera, renderer, particles = [], particleCount = 8000;


export function initHeroBackground(containerId) {
  const container = document.getElementById(containerId);
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 1, 1000);
  camera.position.z = 400;

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.BufferGeometry();
  const positions = [];

  for (let i = 0; i < particleCount; i++) {
    positions.push((Math.random() * 2 - 1) * 500);
    positions.push((Math.random() * 2 - 1) * 500);
    positions.push((Math.random() * 2 - 1) * 500);
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0xfeb3eb,
    size: 2,
    transparent: true,
    opacity: 0.7
  });

  const particleSystem = new THREE.Points(geometry, material);
  scene.add(particleSystem);

  const animate = () => {
    requestAnimationFrame(animate);
    particleSystem.rotation.y += 0.001;
    renderer.render(scene, camera);
  };

  animate();
}
