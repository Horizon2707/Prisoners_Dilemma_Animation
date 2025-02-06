import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuickMatch from "./pages/QuickMatch.jsx";
import Players from "./pages/Players.jsx";
import Tournament from "./pages/Tournament.jsx";
import Settings from "./pages/Settings.jsx";
import QuitGame from "./pages/QuitGame.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quick-match" element={<QuickMatch />} />
        <Route path="/players" element={<Players />} />
        <Route path="/tournament" element={<Tournament />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/quit-game" element={<QuitGame />} />
      </Routes>
    </Router>
  </StrictMode>
);
