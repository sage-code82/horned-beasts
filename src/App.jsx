import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";

function App() {
  const [backgroundColor, changeBackground] = useState("#ffffff");

  const handleBackgroundChange = () => {
    const newColor = backgroundColor === "#ffffff" ? "lime" : "#ffffff";
    changeBackground(newColor);
  };

  return (
    <div className="app" style={{ backgroundColor }}>
      <Header onClick={handleBackgroundChange} />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
