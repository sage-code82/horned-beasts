import React from "react";

const SelectedBeast = ({ selectedBeast, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={selectedBeast.image_url} alt={selectedBeast.title} />
        <h2>{selectedBeast.title}</h2>
        <p>{selectedBeast.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SelectedBeast;
