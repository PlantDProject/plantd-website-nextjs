
// components/CardCarousel.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import "./carousel.css"

const CardCarousel = ({ cards }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handles swipe gestures
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const handleSwipe = (direction : string) => {
    if (direction === "left") {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    } else if (direction === "right") {
      setCurrentIndex((prev) =>
        prev - 1 < 0 ? cards.length - 1 : prev - 1
      );
    }
  };

  const getVisibleCards = () => {
    return [
      cards[currentIndex],
      cards[(currentIndex + 1) % cards.length],
      cards[(currentIndex + 2) % cards.length],
    ];
  };

  return (
    <div {...swipeHandlers} className="carousel-container" style={{ overflow: "hidden", width: "100%" }}>
      <div className="cards-wrapper-top" style={{ height : 300, display: "flex", justifyContent: "center" }}>
        <AnimatePresence>
          {getVisibleCards().map((card, index) => (
            <motion.div
              key={card.id}
              className="card-custom-carousel"
              initial={{ x: index === 0 ? -300 : 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: index === 0 ? 300 : -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                width: "300px",
                margin: "0 10px",
                background: "#fff",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
                overflow: "hidden",
                position : "absolute",
                left : "50%",
              }}
            >
              <img src={card.image} alt={card.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "15px", textAlign: "center" }}>
                <h3>{card.title}</h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CardCarousel;
