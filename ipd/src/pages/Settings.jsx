import React, { useState } from "react";
import styles from "../styles/Settings.module.css";

const menuOptions = ["Language", "Game", "Camera", "Screen", "Sound", "Other"];

function Settings() {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleKeyDown = (event) => {
    if (event.key === "w" || event.key === "W") {
      setSelectedOption((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (event.key === "s" || event.key === "S") {
      setSelectedOption((prev) =>
        prev < menuOptions.length - 1 ? prev + 1 : prev
      );
    } else if (event.key === "Enter") {
      alert(`Selected: ${menuOptions[selectedOption]} settings.`);
    } else if (event.key === "Escape") {
      alert("Exiting Settings!");
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedOption]);

  return (
    <div className={styles.settingsContainer}>
      <h1 className={styles.settingsTitle}>SETTINGS</h1>
      <div className={styles.settingsMenu}>
        {menuOptions.map((option, index) => (
          <div
            key={index}
            className={`${styles.menuItem} ${
              index === selectedOption ? styles.menuItemActive : ""
            }`}
            onClick={() => setSelectedOption(index)}
            onKeyPress={() => alert(`Selected: ${option}`)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className={styles.instructions}>
        <p>Adjust {menuOptions[selectedOption].toLowerCase()} settings.</p>
        <div className={styles.keyHints}>
          <span>W</span> Move Up <span>S</span> Move Down <span>Enter</span>{" "}
          Confirm <span>Esc</span> Back
        </div>
      </div>
    </div>
  );
}

export default Settings;
