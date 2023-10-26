const SelectedBeast = ({ handleShowModal, image_url, description }) => {
  return (
    <div className="SelectedBeast">
      <div className="modal-content">
        <img height="imageHeight" onClick={handleShowModal} src={image_url} />
        <p>{description}</p>
        <button className="close-button" onClick={handleShowModal}>
          X
        </button>
      </div>
    </div>
  );
};

export default SelectedBeast;
