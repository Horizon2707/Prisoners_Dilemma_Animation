import "./App.css";
import { useState, useEffect, useRef } from "react";
import WAVES from "vanta/dist/vanta.waves.min.js";
import Button from "./components/Button";

function App() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          waveHeight: 11.0,
          waveSpeed: 0.55,
          color: 0x7c774d,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <div className="main" ref={myRef}>
        <div className="container">
          <div className="title-container">
            <h1 className="title">Strategic Showdown</h1>
            <p>A Prisoner's Dilemma Simulator</p>
          </div>
          <div className="menu-buttons">
            <Button text={"Quick Match"} routeTo={"quick-match"} />
            <Button text={"Tournament"} routeTo={"tournament"} />
            <Button text={"Players"} routeTo={"players"} />
            <Button text={"Settings"} routeTo={"settings"} />
            <Button text={"Quit Game"} routeTo={"quit-game"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
