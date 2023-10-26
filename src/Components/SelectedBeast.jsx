export default function SelectedBeast({ shownBeast, handleShowModal }) {
  const handleCloseModal = () => {
    handleShowModal(null);
  };

  return (
    <div className={`SelectedBeast ${shownBeast ? "show" : ""}`}>
      <div className="SelectedBeast-content">
        <img src={shownBeast?.image_url} alt={shownBeast?.alt} />
        <p>{shownBeast?.description}</p>
        <button onClick={handleCloseModal}>Close</button>
      </div>
    </div>
  );
}
