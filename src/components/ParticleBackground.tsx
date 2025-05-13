import React, { useEffect, useRef } from 'react';
export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Particle properties
    const particlesArray: Particle[] = [];
    const numberOfParticles = 100;
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        // Random color from space theme
        const colors = ['#8A2BE2', '#4B0082', '#483D8B', '#6A5ACD', '#9370DB'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        // Wrap around screen
        if (this.x > canvas.width) this.x = 0;else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;else if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    // Create particles
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      requestAnimationFrame(animate);
    }
    animate();
    // Handling resize issues
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-40" />;
}