import HornedBeast from "./HornedBeasts";

export default function Gallery({ hornedBeastsData, handleShowModal }) {
  return (
    <div className="gallery">
      {hornedBeastsData.map((beast, index) => {
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
