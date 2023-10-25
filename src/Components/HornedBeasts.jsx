import React, { useState } from "react";

export default function Hornedbeast(props) {
  const [faves, setFaves] = useState(0);

  const handleFavesClick = () => {
    setFaves(faves + 1);
  };

  return (
    <div className="horned-beast">
      <h2 key={props.id}>{props.title}</h2>
      <img
        key={props.id}
        src={props.image_url}
        alt={props.keyword}
        title={props.title}
      />
      <p key={props.id}>{props.description}</p>
      <p onClick={handleFavesClick}>
        {faves} {"\u2764"}
      </p>
    </div>
  );
}
