import "./HornedBeasts";

import HornedBeast from "./HornedBeast";

const Gallery = () => {
  const hornedBeastsData = [
    {
      title: "Barry",
      imageUrl: "src/assets/Barry.jpg",
      description: "Barry is a very hungry dude! He loves a sloppy joe!",
    },
    {
      title: "La Chef",
      imageUrl: "src/assets/LaChef.jpg",
      description: "A master student from the Unicorn School of Grub",
    },
  ];

  return (
    <div className="gallery">
      {hornedBeastsData.map((beast, index) => (
        <HornedBeast
          key={index}
          title={beast.title}
          imageUrl={beast.imageUrl}
          description={beast.description}
        />
      ))}
    </div>
  );
};

export default Gallery;
