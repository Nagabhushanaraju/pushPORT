import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseX: number;
  baseY: number;
}

function drawConnection(
  ctx: CanvasRenderingContext2D,
  nodeA: Node,
  nodeB: Node,
  dist: number,
  time: number,
  i: number,
  j: number
) {
  const opacity = (1 - dist / 140) * 0.15;

  // Gradient line
  const gradient = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
  const hue = (nodeA.x + nodeA.y) * 0.1 + time * 20;

  if (hue % 200 < 100) {
    gradient.addColorStop(0, `hsla(270, 80%, 65%, ${opacity})`);
    gradient.addColorStop(0.5, `hsla(300, 80%, 65%, ${opacity * 1.2})`);
    gradient.addColorStop(1, `hsla(190, 80%, 65%, ${opacity})`);
  } else {
    gradient.addColorStop(0, `hsla(260, 70%, 60%, ${opacity})`);
    gradient.addColorStop(1, `hsla(280, 70%, 65%, ${opacity})`);
  }

  ctx.strokeStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(nodeA.x, nodeA.y);

  // Curved connection for neural feel
  const mx = (nodeA.x + nodeB.x) / 2;
  const my = (nodeA.y + nodeB.y) / 2;
  const offset = Math.sin(time * 2 + i + j) * 5;
  ctx.quadraticCurveTo(mx + offset, my - offset, nodeB.x, nodeB.y);
  ctx.stroke();

  // Pulse on connection
  if (dist < 80 && Math.random() > 0.97) {
    ctx.beginPath();
    ctx.arc(mx, my, 1.5, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${270 + (i % 60)}, 80%, 70%, ${opacity * 3})`;
    ctx.fill();
  }
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const updateSize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    // Create nodes
    const createNodes = () => {
      const nodes: Node[] = [];
      const cols = Math.floor(window.innerWidth / 120);
      const rows = Math.floor(window.innerHeight / 120);
      const spacingX = window.innerWidth / cols;
      const spacingY = window.innerHeight / rows;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacingX + spacingX / 2 + (Math.random() - 0.5) * 40;
          const y = j * spacingY + spacingY / 2 + (Math.random() - 0.5) * 40;
          nodes.push({
            x,
            y,
            baseX: x,
            baseY: y,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: Math.random() * 1.5 + 0.5,
          });
        }
      }
      nodesRef.current = nodes;
    };

    createNodes();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      const time = Date.now() * 0.001;

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Gentle floating
        node.x += node.vx + Math.sin(time + i * 0.1) * 0.1;
        node.y += node.vy + Math.cos(time + i * 0.1) * 0.1;

        // Return to base
        node.vx += (node.baseX - node.x) * 0.001;
        node.vy += (node.baseY - node.y) * 0.001;
        
        // Mouse interaction
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;

          // Fast bounding box and squared distance check before expensive Math.sqrt
          if (Math.abs(dx) < 200 && Math.abs(dy) < 200) {
            const distSq = dx * dx + dy * dy;
            if (distSq < 40000) { // 200 * 200
              const dist = Math.sqrt(distSq);
              const force = (200 - dist) / 200;
              node.vx -= (dx / dist) * force * 0.5;
              node.vy -= (dy / dist) * force * 0.5;
            }
          }
        }

        // Damping
        node.vx *= 0.98;
        node.vy *= 0.98;

        // Keep in bounds
        if (node.x < 0 || node.x > window.innerWidth) node.vx *= -1;
        if (node.y < 0 || node.y > window.innerHeight) node.vy *= -1;
      });

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;

          // Fast bounding box check
          if (Math.abs(dx) >= 140) continue;

          const dy = nodeA.y - nodeB.y;
          if (Math.abs(dy) >= 140) continue;
          
          const distSq = dx * dx + dy * dy;
          // Squared distance check before expensive Math.sqrt
          if (distSq < 19600) { // 140 * 140
            const dist = Math.sqrt(distSq);
            drawConnection(ctx, nodeA, nodeB, dist, time, i, j);
          }
        }
      }

      // Draw nodes
      nodes.forEach((node, i) => {
        const pulse = Math.sin(time * 2 + i * 0.5) * 0.3 + 0.7;
        
        // Glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 8);
        gradient.addColorStop(0, `hsla(275, 85%, 70%, ${0.3 * pulse})`);
        gradient.addColorStop(0.4, `hsla(285, 80%, 65%, ${0.15 * pulse})`);
        gradient.addColorStop(1, 'hsla(275, 80%, 60%, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 8, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `hsla(280, 90%, 75%, ${0.9 * pulse})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Inner bright
        ctx.fillStyle = `hsla(0, 0%, 100%, ${0.6 * pulse})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 0.4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Mouse halo
      if (mouse.active) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 180);
        gradient.addColorStop(0, 'hsla(270, 80%, 65%, 0.08)');
        gradient.addColorStop(0.5, 'hsla(290, 80%, 65%, 0.03)');
        gradient.addColorStop(1, 'hsla(270, 80%, 65%, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 180, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}