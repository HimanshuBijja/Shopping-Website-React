import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();
  }, []);

  const generateStars = () => {
    const numberOfstars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfstars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 98,
        y: Math.random() * 98,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuracion: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  

  return (
    <div>
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star animate-pulse-subtle absolute`}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuracion}s`,
          }}
        ></div>
      ))}
    </div>
  );
};
