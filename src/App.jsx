import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import hornedBeastsData from "./data.json";
import SelectedBeast from "./Components/SelectedBeast";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [shownBeast, setShownBeast] = useState({});
  const [backgroundColor, changeBackground] = useState("#ffffff");
  const [selectedHorns, setSelectedHorns] = useState("all");
  const handleBackgroundChange = () => {
    const newColor = backgroundColor === "#ffffff" ? "lime" : "#ffffff";
    changeBackground(newColor);
    z;
  };
  function handleShowModal(beast) {
    setShowModal(!showModal);
    setShownBeast(beast);
  }

  function handleFilterChange(event) {
    setSelectedHorns(event.target.value);
  }

  return (
    <div className="app" style={{ backgroundColor }}>
      <Header onClick={handleBackgroundChange} />
      <label>How many horns do ya want?! </label>
      <select value={selectedHorns} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="1">1 Horn</option>
        <option value="2">2 Horns</option>
        <option value="3">3 Horns</option>
        <option value="100">100 Horns</option>
      </select>{" "}
      <Gallery
        hornedBeastsData={hornedBeastsData}
        handleShowModal={handleShowModal}
        selectedHorns={selectedHorns}
      />
      <Footer />
      {showModal && (
        <SelectedBeast
          shownBeast={shownBeast}
          handleShowModal={handleShowModal}
        />
      )}
    </div>
  );
}

export default App;
