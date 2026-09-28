import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OSCoreFallback2D } from './OSCoreFallback2D';

interface OSCore3DProps {
  onSelectModule: (modId: string) => void;
}

interface HoveredNodeInfo {
  name: string;
  moduleId: string;
  desc: string;
  x: number;
  y: number;
}

export const OSCore3D: React.FC<OSCore3DProps> = ({ onSelectModule }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);
  const [hoveredNode, setHoveredNode] = useState<HoveredNodeInfo | null>(null);

  useEffect(() => {
    // Check WebGL availability
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setHasWebGL(false);
      return;
    }
    setHasWebGL(true);

    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 4, 14);
    camera.lookAt(0, 0, 0);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch (e) {
      console.warn('Failed to initialize WebGLRenderer', e);
      setHasWebGL(false);
      return;
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x0c4da2, 3, 50);
    pointLight.position.set(0, 2, 5);
    scene.add(pointLight);

    const goldLight = new THREE.PointLight(0xf8a51d, 2, 50);
    goldLight.position.set(5, -2, 2);
    scene.add(goldLight);

    // Central CPU Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Outer wireframe dodecahedron
    const coreGeom = new THREE.DodecahedronGeometry(1.8, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x0c4da2,
      wireframe: true,
      emissive: 0x0033aa,
      emissiveIntensity: 0.6
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    coreGroup.add(coreMesh);

    // Inner glowing sphere
    const innerGeom = new THREE.SphereGeometry(1.1, 24, 24);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x60a5fa,
      emissive: 0x2563eb,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    coreGroup.add(innerMesh);

    // Orbiting Subsystem Nodes
    const nodeData = [
      { name: 'SCHEDULER', id: 'cpu-scheduling', color: 0xf8a51d, desc: 'FCFS, SJF, SRTF, Round Robin' },
      { name: 'PROCESS', id: 'process', color: 0x06b6d4, desc: 'fork(), exec(), wait(), threads' },
      { name: 'MEMORY', id: 'memory', color: 0x10b981, desc: 'First Fit, Best Fit, Fragmentation' },
      { name: 'PAGING', id: 'virtual-memory', color: 0x8b5cf6, desc: 'FIFO, LRU, Optimal, Page Faults' },
      { name: 'DEADLOCK', id: 'deadlock', color: 0xef4444, desc: "Banker's Algorithm & Safe States" },
      { name: 'DISK', id: 'disk-scheduling', color: 0xf59e0b, desc: 'SSTF, SCAN, C-SCAN, Cylinder Seek' },
      { name: 'SYNC', id: 'synchronization', color: 0xec4899, desc: 'Semaphores & Producer-Consumer' }
    ];

    const orbitRadius = 6.2;
    const nodeMeshes: THREE.Mesh[] = [];
    const conduitLines: THREE.Line[] = [];

    nodeData.forEach((node, i) => {
      const angle = (i / nodeData.length) * Math.PI * 2;
      const x = Math.cos(angle) * orbitRadius;
      const z = Math.sin(angle) * orbitRadius;
      const y = Math.sin(angle * 2) * 0.8;

      const geom = new THREE.SphereGeometry(0.55, 20, 20);
      const mat = new THREE.MeshStandardMaterial({
        color: node.color,
        emissive: node.color,
        emissiveIntensity: 0.5,
        roughness: 0.3,
        metalness: 0.7
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.position.set(x, y, z);
      mesh.userData = { ...node, initialAngle: angle, yOffset: y };
      scene.add(mesh);
      nodeMeshes.push(mesh);

      // Connecting line to core
      const lineGeom = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(x, y, z)
      ]);
      const lineMat = new THREE.LineBasicMaterial({
        color: node.color,
        transparent: true,
        opacity: 0.3
      });
      const line = new THREE.Line(lineGeom, lineMat);
      scene.add(line);
      conduitLines.push(line);
    });

    // Particle Cloud (Data streams)
    const particleCount = 200;
    const particleGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 1.5 + Math.random() * (orbitRadius - 1.0);
      positions[i] = Math.cos(angle) * dist;
      positions[i + 1] = (Math.random() - 0.5) * 2;
      positions[i + 2] = Math.sin(angle) * dist;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.08,
      transparent: true,
      opacity: 0.7
    });
    const particleSystem = new THREE.Points(particleGeom, particleMat);
    scene.add(particleSystem);

    // Raycaster for interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-100, -100);

    const onMouseMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);

      if (intersects.length > 0) {
        const hit = intersects[0].object as THREE.Mesh;
        const data = hit.userData;
        setHoveredNode({
          name: data.name,
          moduleId: data.id,
          desc: data.desc,
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
        document.body.style.cursor = 'pointer';
      } else {
        setHoveredNode(null);
        document.body.style.cursor = 'default';
      }
    };

    const onClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);
      if (intersects.length > 0) {
        const data = intersects[0].object.userData;
        onSelectModule(data.id);
      }
    };

    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('click', onClick);

    // Animation Loop
    let animationId: number;
    let time = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.01;

      // Rotate central CPU core
      coreMesh.rotation.x += 0.006;
      coreMesh.rotation.y += 0.009;
      innerMesh.rotation.y -= 0.005;

      // Pulse inner sphere
      const scale = 1.0 + Math.sin(time * 3) * 0.06;
      innerMesh.scale.set(scale, scale, scale);

      // Rotate nodes around orbit
      nodeMeshes.forEach((mesh, i) => {
        const initialAngle = mesh.userData.initialAngle;
        const currentAngle = initialAngle + time * 0.25;
        const x = Math.cos(currentAngle) * orbitRadius;
        const z = Math.sin(currentAngle) * orbitRadius;
        const y = Math.sin(currentAngle * 2) * 0.8;
        mesh.position.set(x, y, z);

        // Update conduit line
        const line = conduitLines[i];
        const linePos = line.geometry.attributes.position as THREE.BufferAttribute;
        linePos.setXYZ(1, x, y, z);
        linePos.needsUpdate = true;
      });

      // Rotate particle cloud
      particleSystem.rotation.y += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 600;
      const newHeight = container.clientHeight || 450;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      renderer.domElement.removeEventListener('click', onClick);
      cancelAnimationFrame(animationId);
      document.body.style.cursor = 'default';
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [onSelectModule]);

  if (hasWebGL === false) {
    return <OSCoreFallback2D onSelectModule={onSelectModule} />;
  }

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] flex items-center justify-center overflow-hidden">
      <div ref={mountRef} className="w-full h-full" />

      {/* Floating HUD Tooltip on Hover */}
      {hoveredNode && (
        <div 
          className="absolute z-20 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-3 px-3.5 py-2 rounded-xl bg-slate-900/90 text-white border border-blue-500/40 shadow-xl backdrop-blur-md transition-all duration-150"
          style={{
            left: `${hoveredNode.x}px`,
            top: `${hoveredNode.y - 15}px`
          }}
        >
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-srm-accent animate-pulse" />
            <span className="font-bold text-xs tracking-wider text-blue-300 uppercase">
              {hoveredNode.name} MODULE
            </span>
          </div>
          <div className="text-[11px] text-slate-300 mt-0.5 max-w-[200px]">
            {hoveredNode.desc}
          </div>
          <div className="text-[10px] text-srm-accent mt-1 font-semibold">
            Click to launch simulation →
          </div>
        </div>
      )}

      {/* Bottom Hint */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10 text-xs text-slate-400 bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-800 shadow-md backdrop-blur-xs flex items-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span>Interactive 3D OS Core • Click any subsystem node to explore</span>
      </div>
    </div>
  );
};
