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
  const handleBackgroundChange = () => {
    const newColor = backgroundColor === "#ffffff" ? "lime" : "#ffffff";
    changeBackground(newColor);z

    
  };
  function handleShowModal(beast) {
    setShowModal(!showModal);
    setShownBeast(beast);
  }

  return (
    <div className="app" style={{ backgroundColor }}>
      <Header onClick={handleBackgroundChange} />
      <Gallery
        hornedBeastsData={hornedBeastsData}
        handleShowModal={handleShowModal}
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
