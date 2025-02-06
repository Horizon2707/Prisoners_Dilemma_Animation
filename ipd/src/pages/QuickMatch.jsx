import React, { useState } from "react";
import styles from "../styles/QuickMatch.module.css";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
function QuickMatch() {
  const [selectedPlayer1, setSelectedPlayer1] = useState(0);
  const [selectedPlayer2, setSelectedPlayer2] = useState(0);
  // useEffect(() => {}) // fetch imgs from server
  const data = [
    { img: "../assets/spiteful.jpg", name: "Spiteful Memory", id: 1 },
    { img: "../assets/QCD.jpg", name: "QCD", id: 2 },
  ];
  return (
    <>
      <div className={styles["main"]}>
        <div className={styles["cardHolder"]}>
          <Card
            img={data[selectedPlayer1].img}
            title={data[selectedPlayer1].name}
          />
          <Carousel setSelectedPlayer1={setSelectedPlayer1} />
          <Card
            img={
              "https://imgs.search.brave.com/voeMv1k0n8GdSXhBrv2bp92b8CwkpukSKPsCzlXQ-Uo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmlt/Z2ZsaXAuY29tLzQv/M2tnOWRqLmpwZw"
            }
            title={"QCD"}
          />
        </div>
      </div>
    </>
  );
}

export default QuickMatch;
