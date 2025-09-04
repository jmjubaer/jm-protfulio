"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const StarBackground = () => {
  const [stars, setStars] = useState<{ x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    const starArray = Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
    }));
    setStars(starArray);
  }, []);

  return (
    <div className="absolute inset-0 bg-[#0d0d16] overflow-hidden">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 5,
          }}
          style={{
            position: "absolute",
            top: star.y,
            left: star.x,
            width: star.size,
            height: star.size,
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
