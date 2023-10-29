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
  const [searchQuery, setSearchQuery] = useState("");

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

  function handleSearchQueryChange(event) {
    const newSearch = event.target.value;
    setSearchQuery(newSearch);
  }

  const filteredBeasts = hornedBeastsData.filter((beast) => {
    if (
      (selectedHorns === "all" || beast.horns === parseInt(selectedHorns)) &&
      (beast.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        searchQuery === "")
    ) {
      return true;
    }
    return false;
  });

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
      <p>OR</p>
      <input
        type="text"
        placeholder="Search by beastie..."
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
      <Gallery
        hornedBeastsData={filteredBeasts}
        // hornedBeastsData={hornedBeastsData}
        handleShowModal={handleShowModal}
        selectedHorns={selectedHorns}
      />
      {showModal && (
        <SelectedBeast
          shownBeast={shownBeast}
          handleShowModal={handleShowModal}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
