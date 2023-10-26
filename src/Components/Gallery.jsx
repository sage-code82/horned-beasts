import HornedBeast from "./HornedBeasts";

export default function Gallery({
  hornedBeastsData,
  handleShowModal,
  selectedHorns,
}) {
  const filteredData =
    selectedHorns === "all"
      ? hornedBeastsData
      : hornedBeastsData.filter(
          (beast) => beast.horns.toString() === selectedHorns
        );

  return (
    <div className="gallery">
      {filteredData.map((beast, index) => {
        return (
          <HornedBeast
            key={beast._id}
            image_url={beast.image_url}
            title={beast.title}
            description={beast.description}
            keyword={beast.alt}
            horns={beast.horns}
            handleShowModal={handleShowModal}
          />
        );
      })}
    </div>
  );
}
