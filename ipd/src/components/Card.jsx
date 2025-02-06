import React from "react";
import styles from "../styles/Card.module.css";

function Card({ img, title, width, height }) {
  const cardDim = {
    width: width || "25rem",
    height: height || "25rem",
  };
  const sxStyles = {
    fontSize: "1.2rem",
    fontWeight: 500,
    color: "rgb(255, 255, 255)",
  };
  return (
    <>
      <div className={styles["main"]}>
        <div className={styles["card"]} style={cardDim}>
          <img
            src={img}
            style={{
              width: width || "25rem",
              height: height || "25rem",
              borderRadius: "0.5rem 0.5rem 0.5rem 0.5rem",
              border: "1px solid white",
            }}
          />
        </div>
        <div>
          <p style={sxStyles}>{title}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
