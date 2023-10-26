import HornedBeast from "./HornedBeasts";

const Gallery = (props) => {
  return (
    <div className="gallery">
      {props.hornedBeastsData.map((beast, index) => (
        <HornedBeast
          key={beast._id}
          image_url={beast.image_url}
          title={beast.title}
          description={beast.description}
          keyword={beast.alt}
          horns={beast.horns}
        />
      ))}
    </div>
  );
};

export default Gallery;
