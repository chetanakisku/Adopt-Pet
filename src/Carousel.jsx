import { useState } from "react";

const Carousel = ({ images }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="carousel">
      <img src={images[active]} />
      <div className="carousel-smaller">
        {images.map((image, index) => (
          <img
            src={image}
            className={index === active ? "active" : ""}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
