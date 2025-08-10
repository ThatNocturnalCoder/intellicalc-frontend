import React, { useEffect, useState } from 'react';

const GRID_SIZE = 20; // 20x20 grid
const TOTAL_SQUARES = GRID_SIZE * GRID_SIZE;

const GraphBackground = () => {
  const [blinkIndices, setBlinkIndices] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCount = Math.floor(Math.random() * 5) + 3; // blink 3–7 squares
      const newIndices = Array.from({ length: randomCount }, () =>
        Math.floor(Math.random() * TOTAL_SQUARES)
      );
      setBlinkIndices(newIndices);
    }, 400); // every 400ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 grid grid-cols-20 grid-rows-20 w-full h-full">
      {Array.from({ length: TOTAL_SQUARES }).map((_, idx) => (
        <div
          key={idx}
          className={`border border-gray-800 transition duration-300 ${
            blinkIndices.includes(idx) ? 'bg-white/10' : 'bg-transparent'
          }`}
        />
      ))}
    </div>
  );
};

export default GraphBackground;
