import HornedBeast from "./HornedBeasts";
// import hornedBeastsData from "../data.json";

const Gallery = ({ hornedBeastsData, openModal }) => {
  return (
    <div className="gallery">
      {hornedBeastsData.map((beast, index) => (
        <HornedBeast
          key={beast._id}
          image_url={beast.image_url}
          title={beast.title}
          description={beast.description}
          keyword={beast.alt}
          horns={beast.horns}
          onClick={() => openModal(beast)}
        />
      ))}
    </div>
  );
};

export default Gallery;
