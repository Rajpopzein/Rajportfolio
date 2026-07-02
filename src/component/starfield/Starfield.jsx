import { useEffect, useRef } from "react";
import "./starfield.css";

// Fixed full-viewport constellation that drifts and wires up to the cursor.
const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    let W = 0;
    let H = 0;
    let stars = [];
    let raf = 0;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      W = canvas.width = window.innerWidth * DPR;
      H = canvas.height = window.innerHeight * DPR;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      const count = Math.min(150, Math.floor((window.innerWidth * window.innerHeight) / 12000));
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.18 * DPR,
          vy: (Math.random() - 0.5) * 0.18 * DPR,
          r: (Math.random() * 1.3 + 0.5) * DPR,
          tw: Math.random() * Math.PI * 2,
        });
      }
    };

    const onMove = (e) => {
      mouse.x = e.clientX * DPR;
      mouse.y = e.clientY * DPR;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -9999;
    };

    const LINK = 130 * DPR;
    const MOUSE_LINK = 190 * DPR;

    const frame = (t) => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        if (!reduce) {
          s.x += s.vx;
          s.y += s.vy;
        }
        if (s.x < 0) s.x = W;
        if (s.x > W) s.x = 0;
        if (s.y < 0) s.y = H;
        if (s.y > H) s.y = 0;

        for (let j = i + 1; j < stars.length; j++) {
          const o = stars[j];
          const dx = s.x - o.x;
          const dy = s.y - o.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK) {
            ctx.strokeStyle = "rgba(167,139,250," + 0.14 * (1 - d / LINK) + ")";
            ctx.lineWidth = DPR * 0.6;
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(o.x, o.y);
            ctx.stroke();
          }
        }

        const mdx = s.x - mouse.x;
        const mdy = s.y - mouse.y;
        const md = Math.hypot(mdx, mdy);
        if (md < MOUSE_LINK) {
          ctx.strokeStyle = "rgba(97,232,225," + 0.5 * (1 - md / MOUSE_LINK) + ")";
          ctx.lineWidth = DPR * 0.8;
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        const tw = reduce ? 1 : 0.6 + 0.4 * Math.sin(t * 0.002 + s.tw);
        ctx.fillStyle = "rgba(238,233,255," + tw + ")";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (mouse.x > 0) {
        ctx.fillStyle = "rgba(255,171,82,0.9)";
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 2.5 * DPR, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = window.requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    raf = window.requestAnimationFrame(frame);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
};

export default Starfield;
