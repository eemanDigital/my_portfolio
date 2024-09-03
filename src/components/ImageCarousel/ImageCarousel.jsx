import { useState } from "react";

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="image-carousel">
      <img
        src={images[currentImageIndex]}
        alt={`Project screenshot ${currentImageIndex + 1}`}
        className="project-image"
      />
      <button className="carousel-button prev" onClick={prevImage}>
        &lt;
      </button>
      <button className="carousel-button next" onClick={nextImage}>
        &gt;
      </button>
      <div className="image-indicator">
        {currentImageIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageCarousel;
