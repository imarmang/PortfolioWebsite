"use client";
import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const codeSnippets = [
      // JS
      "const",
      "async",
      "=>",
      "{}",
      "[]",
      ".map()",
      "void",
      "import",
      "useState",
      "fetch",
      "await",
      "export",
      // React/Next.js
      "React",
      "Next.js",
      "useEffect",
      "useRef",
      "props",
      "</>",
      "router",
      // Backend
      "Node",
      "API",
      "REST",
      "POST",
      "GET",
      // Python
      "def",
      "class",
      "lambda",
      "import",
      // Database
      "SQL",
      "JOIN",
      "query",
    ];

    const particles = Array.from({ length: 60 }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: 100 + Math.random() * 180,
      speed: (0.0005 + Math.random() * 0.001) * (Math.random() > 0.5 ? 1 : -1),
      size: 1.5 + Math.random() * 2,
      opacity: 0.4 + Math.random() * 0.6,
      isCode: Math.random() > 0.75,
      label: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      labelOpacity: 0,
      labelTarget: Math.random() > 0.5 ? 0.7 : 0,
      x: 0,
      y: 0,
    }));

    let animId;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      particles.forEach((p) => {
        p.angle += p.speed;
        p.x = cx + Math.cos(p.angle) * p.radius;
        p.y = cy + Math.sin(p.angle) * p.radius;
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(192,192,192,${0.3 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.labelOpacity += (p.labelTarget - p.labelOpacity) * 0.01;
        if (Math.abs(p.labelOpacity - p.labelTarget) < 0.01) {
          p.labelTarget = p.labelTarget === 0 ? 0.7 : 0;
        }

        if (p.isCode && p.labelOpacity > 0.05) {
          ctx.font = "11px monospace";
          ctx.fillStyle = `rgba(192,192,192,${p.labelOpacity})`;
          ctx.fillText(p.label, p.x + 6, p.y - 6);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(192,192,192,${p.opacity})`;
          ctx.fill();
        }
      });

      // Draw AG in center
      ctx.font = "bold 80px sans-serif";
      ctx.fillStyle = "rgba(192,192,192,0.9)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("AG", cx, cy);

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
      {/*<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">*/}
      {/*  <Image*/}
      {/*    src="/images/A_Home.png"*/}
      {/*    alt="A"*/}
      {/*    width={150}*/}
      {/*    height={150}*/}
      {/*    className="!w-[300px] h-auto"*/}
      {/*  />*/}
      {/*</div>*/}
    </div>
  );
}
