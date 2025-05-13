import React, { useEffect, useRef, memo } from 'react';
import * as THREE from 'three';
export function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const crystalRef = useRef<THREE.Group | null>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    // Set up scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;
    // Set up renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    // Create crystal group
    const crystal = new THREE.Group();
    crystalRef.current = crystal;
    scene.add(crystal);
    // Create crystal geometry
    const geometry = new THREE.IcosahedronGeometry(1.5, 0);
    // Create crystal materials
    const materials = [new THREE.MeshBasicMaterial({
      color: 0x8a2be2,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    }), new THREE.MeshBasicMaterial({
      color: 0x4b0082,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    })];
    // Create crystal meshes
    const mesh1 = new THREE.Mesh(geometry, materials[0]);
    const mesh2 = new THREE.Mesh(geometry, materials[1]);
    mesh2.scale.setScalar(1.2);
    crystal.add(mesh1, mesh2);
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    // Add point light
    const pointLight = new THREE.PointLight(0x9370db, 1);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (crystal) {
        crystal.rotation.x += 0.003;
        crystal.rotation.y += 0.005;
      }
      renderer.render(scene, camera);
    };
    animate();
    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current || !crystal) return;
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = (event.clientX - rect.left) / rect.width * 2 - 1;
      const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      crystal.rotation.x = mouseY * 0.3;
      crystal.rotation.y = mouseX * 0.3;
    };
    containerRef.current.addEventListener('mousemove', handleMouseMove);
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !camera || !renderer) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      if (containerRef.current && renderer) {
        containerRef.current.removeChild(renderer.domElement);
      }
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 z-0" />
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          <span className="block">Hi!</span>
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-indigo-600">
            I'm Vaishnavi
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
          Video game developer
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects"
             className="px-8 py-3 bg-purple-700 hover:bg-purple-600 text-white rounded-md transition-colors text-lg font-medium">
            View Projects
          </a>
          <a href="#contact"
             className="px-8 py-3 bg-transparent border-2 border-purple-500 hover:bg-purple-900/30 text-white rounded-md transition-colors text-lg font-medium">
            Contact Me
          </a>
        </div>
      </div>
    <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
      <div className="w-8 h-8 border-b-2 border-r-2 border-white rotate-45 transform"></div>
      </div>
    </section>;
}