import React, { useEffect, useState } from 'react';

const ROWS = 25;
const COLS = 25;
const TOTAL = ROWS * COLS;

const TechGridBackground = () => {
  const [blinking, setBlinking] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newBlinking = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * TOTAL)
      );
      setBlinking(newBlinking);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-black">
      {/* Grid overlay */}
      <div
        className="grid w-full h-full"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        }}
      >
        {Array.from({ length: TOTAL }).map((_, index) => (
          <div
            key={index}
            className={`border border-zinc-800 transition-all duration-300 ${
              blinking.includes(index) ? 'bg-white/10' : 'bg-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TechGridBackground;