import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import hornedBeastsData from "./data.json";
import SelectedBeast from "./Components/SelectedBeast";

function App() {
  const [backgroundColor, changeBackground] = useState("#ffffff");
  const [showSelectedBeast, setSelectedBeast] = useState(flase);
  const handleBackgroundChange = () => {
    const newColor = backgroundColor === "#ffffff" ? "lime" : "#ffffff";
    changeBackground(newColor);

    function handleShowSelectedBeast() {
      setShowSelectedBeast(!showSelectedBeast);
    }
  };

  return (
    <div className="app" style={{ backgroundColor }}>
      {showSelectedBeast && (
        <SelectedBeast handleShowSelectedBeast={handleShowSelectedBeast} />
      )}

      <Header onClick={handleBackgroundChange} />
      <Gallery hornedBeastsData={hornedBeastsData} />
      <Footer />
    </div>
  );
}

export default App;
