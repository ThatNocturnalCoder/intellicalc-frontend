import { useEffect, useRef } from 'react';

const FuturisticGridBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const spacing = 50;
    const glowingDots = [];
    const blinkingTiles = [];

    for (let x = 0; x <= width; x += spacing) {
      for (let y = 0; y <= height; y += spacing) {
        glowingDots.push({ x, y });
      }
    }

    const addBlinkingTile = () => {
      const x = Math.floor(Math.random() * (width / spacing)) * spacing;
      const y = Math.floor(Math.random() * (height / spacing)) * spacing;
      blinkingTiles.push({
        x,
        y,
        alpha: 0,
        direction: 'in',
        hold: 0
      });
    };

    addBlinkingTile();

    const blinkInterval = setInterval(() => {
      addBlinkingTile();
    }, 1500);

    const draw = () => {
      // 1. Deep Black-Techy Background
      ctx.fillStyle = '#0c0f1a';
      ctx.fillRect(0, 0, width, height);

      // 2. Crisp Grid Lines (not blurry!)
      ctx.strokeStyle = 'rgba(255,255,255,0.03)';
      ctx.lineWidth = 1;

      for (let x = 0.5; x <= width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0.5; y <= height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 3. Glowing Dots at Intersections
      const time = Date.now() * 0.001;
      for (const dot of glowingDots) {
        const radius = 2 + Math.sin(time + dot.x + dot.y) * 0.4;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.1)';
        ctx.fill();
      }

      // 4. Blinking Tiles
      for (let i = 0; i < blinkingTiles.length; i++) {
        const tile = blinkingTiles[i];

        if (tile.direction === 'in') {
  tile.alpha += 0.004; // faster fade-in
  if (tile.alpha >= 0.2) {
    tile.alpha = 0.2;
    tile.hold += 1;
    if (tile.hold > 50) tile.direction = 'out'; // shorter hold
  }
} else if (tile.direction === 'out') {
  tile.alpha -= 0.003; // faster fade-out
  if (tile.alpha <= 0) {
    blinkingTiles.splice(i, 1);
    i--;
    continue;
  }
}

        ctx.fillStyle = `rgba(255, 255, 255, ${tile.alpha})`;
        ctx.fillRect(tile.x, tile.y, spacing, spacing);
      }
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      glowingDots.length = 0;
      for (let x = 0; x <= width; x += spacing) {
        for (let y = 0; y <= height; y += spacing) {
          glowingDots.push({ x, y });
        }
      }
    };

    window.addEventListener('resize', resize);
    return () => {
      clearInterval(blinkInterval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      aria-hidden="true"
    />
  );
};

export default FuturisticGridBackground;
