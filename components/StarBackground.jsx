import { useEffect, useState } from "react";

export const StarBackground = ({ isDarkMode }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();

    const handleResize = () => {
      generateStars();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.floor(Math.random() * 2) + 2, // Use whole numbers
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.3 + 0.7,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };

  return (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {stars.map((star) => (
      <div
        key={star.id}
         className={`absolute animate-pulse ${
            isDarkMode ? 'text-white' : 'text-yellow-200'
          }`}
        style={{
          fontSize: star.size + "%",
          left: star.x + "%",
          top: star.y + "%",
          opacity: star.opacity,
          animationDuration: star.animationDuration + "s",
        }}
      >
        ★
      </div>
    ))}
  </div>
);
};
