import image1 from "../assets/gallery/image1.jpeg";
import image2 from "../assets/gallery/image2.jpeg";
import image3 from "../assets/gallery/image3.jpeg";
import image4 from "../assets/gallery/image4.jpeg";
import image5 from "../assets/gallery/image5.jpeg";
import image6 from "../assets/gallery/image6.jpeg";
import image7 from "../assets/gallery/image7.jpeg";
import image8 from "../assets/gallery/image8.jpeg";
import image9 from "../assets/gallery/image9.jpeg";

const GalleryPage = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#AE2580]">
            Gallery
          </p>

          <h1 className="mt-4 text-4xl font-bold text-[#252525] md:text-6xl">
            Our <span className="text-[#AE2580]">Gallery</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
            Explore our clinic, care environment and personalised treatment
            experience.
          </p>

        </div>

        {/* 9 Images */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {images.map((image, index) => (
            <div
              key={index}
              className="group h-80 overflow-hidden rounded-3xl bg-[#F3EEF1] shadow-sm"
            >
              <img
                src={image}
                alt={`MBS Mind Body Soul Gallery ${index + 1}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default GalleryPage;