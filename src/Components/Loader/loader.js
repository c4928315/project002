import React, { useEffect } from 'react';
import "./loader.css"

const Loader = () => {
  useEffect(() => {
    const dots = document.querySelectorAll('.dot');

    const intervalId = setInterval(() => {
      const randomColor = getRandomColor();
      dots.forEach(dot => {
        dot.style.backgroundColor = randomColor;
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="loader" id="loader">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
};

export default Loader;
