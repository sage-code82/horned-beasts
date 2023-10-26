import React, { useState } from "react";
import SelectedBeast from "./SelectedBeast";

export default function Hornedbeast({ title, image_url, description, horns }) {
  const [faves, setFaves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const handleFavesClick = () => {
    setFaves(faves + 1);
  };
  function handleShowModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="horned-beast">
      <h2>{title}</h2>
      <p> {description}</p>
      <p>{horns}</p>
      <p onClick={handleFavesClick}>
        {faves} {"\u2764"}
      </p>
      {showModal && (
        <SelectedBeast
          image_url={image_url}
          description={description}
          handleShowModal={handleShowModal}
        />
      )}
    </div>
  );
}
