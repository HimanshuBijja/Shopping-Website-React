import { useEffect, useState } from "react";

const useBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();
    window.addEventListener('resize', handleResize);

    return()=>{
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleResize = ()=>{
    generateStars();
  }

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 98,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuracion: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

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

  return { stars, meteors };
};

export const StarBackground = () => {
  const { stars, meteors } = useBackground();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none ">
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
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className={` meteor animate-meteor`}
          style={{
            width: `${meteor.size * 50 }px`,
            height: `${meteor.size}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelaydelay: meteor.delay,
            animationDuration: `${meteor.animationDuracion}s`,
          }}
        ></div>
      ))}
    </div>
  );
};
