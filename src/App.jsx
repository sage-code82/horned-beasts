import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import hornedBeastsData from "./data.json";
import SelectedBeast from "./Components/SelectedBeast";

function App() {
  const [backgroundColor, changeBackground] = useState("#ffffff");
  const [selectedBeast, setSelectedBeast] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleBackgroundChange = () => {
    const newColor = backgroundColor === "#ffffff" ? "lime" : "#ffffff";
    changeBackground(newColor);
  };

  const openModal = (beast) => {
    setSelectedBeast(beast);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBeast(null);
    setModalOpen(false);
  };

  return (
    <div className="app" style={{ backgroundColor }}>
      <Header onClick={handleBackgroundChange} />
      <Gallery hornedBeastsData={hornedBeastsData} openModal={openModal} />
      {selectedBeast && (
        <SelectedBeast selectedBeast={selectedBeast} onClose={closeModal} />
      )}
      <Footer />
    </div>
  );
}

export default App;
