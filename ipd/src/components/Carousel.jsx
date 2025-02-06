import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from "../styles/Carousel.module.css";
const Carousel = ({ setSelectedPlayer1, setSelectedPlayer2 }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef(null);
  const itemHeight = 100; // Height of each item in pixels
  const items = ["Item 1", "Item 2"];
  useEffect(() => {
    const carousel = carouselRef.current;
    const selectedItem = carousel.children[selectedIndex];

    const offset = selectedIndex * itemHeight - itemHeight;
    gsap.to(carousel, { y: -offset, duration: 0.4, ease: "power2.out" });

    gsap.to(selectedItem, {
      opacity: 1,
      scale: 1.2,
      duration: 0.2,
      transformOrigin: "center",
    });

    // Dim the items above and below
    if (selectedIndex > 0) {
      gsap.to(carousel.children[selectedIndex - 1], {
        opacity: 0.7,
        scale: 0.9,
        duration: 0.2,
      });
    }
    if (selectedIndex < items.length - 1) {
      gsap.to(carousel.children[selectedIndex + 1], {
        opacity: 0.7,
        scale: 0.9,
        duration: 0.2,
      });
    }

    // Reset other items
    Array.from(carousel.children).forEach((item, index) => {
      if (
        index !== selectedIndex &&
        index !== selectedIndex - 1 &&
        index !== selectedIndex + 1
      ) {
        gsap.to(item, { opacity: 0.3, scale: 0.8, duration: 0.3 });
      }
    });
  }, [selectedIndex, itemHeight, items.length]);

  const handleNavigation = (direction) => {
    if (direction === "up") {
      setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
      setSelectedPlayer1((selectedIndex - 1 + items.length) % items.length);
    } else if (direction === "down") {
      setSelectedIndex((selectedIndex + 1) % items.length);
      setSelectedPlayer1((selectedIndex + 1) % items.length);
    }
  };

  return (
    <div className={styles["container"]}>
      <button
        onClick={() => handleNavigation("up")}
        className={styles["nav-button"]}
        disabled={selectedIndex === 0}
      >
        Up
      </button>
      <div
        style={{
          height: `${itemHeight * 3}px`,
          overflow: "hidden",
          position: "relative",
          width: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          borderRadius: "10px",
        }}
      >
        <div className={styles["window"]}></div>
        <div
          ref={carouselRef}
          style={{
            position: "absolute",
            transform: `translateY(0)`,
            top: "0",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                height: `${itemHeight}px`,
                width: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => handleNavigation("down")}
        className={styles["nav-button"]}
        disabled={selectedIndex === items.length - 1}
      >
        Down
      </button>
    </div>
  );
};

export default Carousel;
