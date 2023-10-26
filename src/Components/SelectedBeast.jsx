const SelectedBeast = ({ handleShowModal, shownBeast }) => {
  return (
    <div className="modal" onClick={handleShowModal}>
      <h2>{shownBeast.title}</h2>
      <img src={shownBeast.image_url} />
    </div>
  );
};

export default SelectedBeast;
