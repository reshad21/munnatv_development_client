import Image from "next/image";

const FooterGallery = () => {
  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop", alt: "Gallery Image 1" },
    { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop", alt: "Gallery Image 2" },
    { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop", alt: "Gallery Image 3" },
    { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop", alt: "Gallery Image 4" },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-second mb-4">Latest Gallery</h3>
      <div className="grid grid-cols-2 gap-2">
        {galleryImages.map((image, index) => (
          <div key={index} className="aspect-square overflow-hidden rounded-md">
            <Image
              src={image.src}
              alt={image.alt}
              width={1000}
              height={1000}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterGallery;
