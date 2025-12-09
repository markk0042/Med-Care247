import './MarqueeCarousel.css'

function MarqueeCarousel({ images = [], reverse = true }) {
  // Duplicate images fewer times for better performance
  const duplicatedImages = [...images, ...images, ...images]

  return (
    <div className="marquee-container">
      <div className={`marquee-wrapper ${reverse ? 'reverse' : ''}`}>
        <div className="marquee-content">
          {duplicatedImages.map((image, index) => (
            <div key={index} className="marquee-item">
              <img 
                src={image} 
                alt={`Logo ${(index % images.length) + 1}`}
                className="marquee-image"
              />
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="marquee-content" aria-hidden="true">
          {duplicatedImages.map((image, index) => (
            <div key={`duplicate-${index}`} className="marquee-item">
              <img 
                src={image} 
                alt={`Logo ${(index % images.length) + 1}`}
                className="marquee-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MarqueeCarousel

