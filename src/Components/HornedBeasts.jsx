import React, { useState } from "react";

export default function Hornedbeast({
  title,
  image_url,
  description,
  handleShowModal,
  horns,
}) {
  const [faves, setFaves] = useState(0);
  const handleFavesClick = () => {
    setFaves(faves + 1);
  };

  return (
    <div className="horned-beast">
      <h2>{title}</h2>
      <img
        src={image_url}
        onClick={() => handleShowModal({ title, image_url })}
      />
      <p> {description}</p>
      <p>number of horns {horns}</p>
      <p onClick={handleFavesClick}>
        {faves} {"\u2764"}
      </p>
    </div>
  );
}
