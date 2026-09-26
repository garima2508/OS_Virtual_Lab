import React, { useEffect, useRef } from 'react';

interface OSCoreFallback2DProps {
  onSelectModule: (modId: string) => void;
}

export const OSCoreFallback2D: React.FC<OSCoreFallback2DProps> = ({ onSelectModule }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let angle = 0;

    const nodes = [
      { name: 'SCHEDULER', id: 'cpu-scheduling', color: '#f8a51d' },
      { name: 'PROCESS', id: 'process', color: '#06b6d4' },
      { name: 'MEMORY', id: 'memory', color: '#10b981' },
      { name: 'PAGING', id: 'virtual-memory', color: '#8b5cf6' },
      { name: 'DEADLOCK', id: 'deadlock', color: '#ef4444' },
      { name: 'DISK', id: 'disk-scheduling', color: '#f59e0b' },
      { name: 'FILES', id: 'file-systems', color: '#3b82f6' },
      { name: 'SYNC', id: 'synchronization', color: '#ec4899' }
    ];

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 600;
      canvas.height = canvas.parentElement?.clientHeight || 450;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const radius = Math.min(cx, cy) * 0.7;

      angle += 0.008;

      // Draw central CPU core
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, 38, 0, Math.PI * 2);
      ctx.fillStyle = '#0c4da2';
      ctx.shadowColor = '#3b82f6';
      ctx.shadowBlur = 20;
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#60a5fa';
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('CPU CORE', cx, cy - 6);
      ctx.font = '9px monospace';
      ctx.fillStyle = '#93c5fd';
      ctx.fillText('ACTIVE', cx, cy + 10);
      ctx.restore();

      // Draw orbital rings and nodes
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      nodes.forEach((node, i) => {
        const nodeAngle = angle + (i * Math.PI * 2) / nodes.length;
        const nx = cx + Math.cos(nodeAngle) * radius;
        const ny = cy + Math.sin(nodeAngle) * radius;

        // Connecting Conduit
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.15)';
        ctx.stroke();

        // Traveling particle
        const particleT = (angle * 2 + i * 0.5) % 1;
        const px = cx + (nx - cx) * particleT;
        const py = cy + (ny - cy) * particleT;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 8;
        ctx.fill();

        // Node Circle
        ctx.beginPath();
        ctx.arc(nx, ny, 22, 0, Math.PI * 2);
        ctx.fillStyle = '#111827';
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = node.color;
        ctx.stroke();

        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 9px Inter, sans-serif';
        ctx.fillText(node.name, nx, ny);
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    // Click handler on canvas
    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const radius = Math.min(cx, cy) * 0.7;

      nodes.forEach((node, i) => {
        const nodeAngle = angle + (i * Math.PI * 2) / nodes.length;
        const nx = cx + Math.cos(nodeAngle) * radius;
        const ny = cy + Math.sin(nodeAngle) * radius;
        const dist = Math.hypot(x - nx, y - ny);
        if (dist <= 26) {
          onSelectModule(node.id);
        }
      });
    };

    canvas.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationId);
    };
  }, [onSelectModule]);

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full cursor-pointer" />
      <div className="absolute bottom-3 text-xs text-slate-400 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800">
        Click any subsystem node to explore its simulations
      </div>
    </div>
  );
};
