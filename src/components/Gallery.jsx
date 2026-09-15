import { Link } from "react-router-dom";

import image1 from "../assets/gallery/image1.jpeg";
import image2 from "../assets/gallery/image2.jpeg";
import image3 from "../assets/gallery/image3.jpeg";
import image4 from "../assets/gallery/image4.jpeg";
import image5 from "../assets/gallery/image5.jpeg";
import image6 from "../assets/gallery/image6.jpeg";

const Gallery = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ];

  return (
    <section className="overflow-hidden bg-[#FAF7F9] px-4 py-12 sm:px-6 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-3 sm:gap-5 md:flex-row md:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#AE2580] sm:text-sm sm:tracking-[0.2em]">
              Gallery
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#252525] sm:mt-3 sm:text-4xl">
              Our <span className="text-[#AE2580]">Gallery</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-500 md:text-right md:leading-7">
            A glimpse of our clinic, care environment and personalised
            treatment experience.
          </p>

        </div>

        {/* Auto Moving Gallery */}
        <div className="relative mt-7 overflow-hidden sm:mt-9 md:mt-10">

          <div className="gallery-track flex w-max gap-3 hover:[animation-play-state:paused] sm:gap-5">

            {/* First Set */}
            {images.map((image, index) => (
              <div
                key={`first-${index}`}
                className="
                  group
                  relative
                  h-44
                  w-[240px]
                  flex-shrink-0
                  overflow-hidden
                  rounded-2xl
                  bg-[#F3EEF1]
                  shadow-sm

                  sm:h-52
                  sm:w-[320px]
                  sm:rounded-3xl

                  md:h-60
                  md:w-[350px]
                "
              >
                <img
                  src={image}
                  alt={`MBS Mind Body Soul Gallery ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent px-4 py-4 sm:px-5 sm:py-5">
                  <span className="text-[11px] font-semibold text-white sm:text-xs">
                    MBS Mind Body Soul
                  </span>
                </div>
              </div>
            ))}

            {/* Duplicate Set */}
            {images.map((image, index) => (
              <div
                key={`second-${index}`}
                className="
                  group
                  relative
                  h-44
                  w-[240px]
                  flex-shrink-0
                  overflow-hidden
                  rounded-2xl
                  bg-[#F3EEF1]
                  shadow-sm

                  sm:h-52
                  sm:w-[320px]
                  sm:rounded-3xl

                  md:h-60
                  md:w-[350px]
                "
              >
                <img
                  src={image}
                  alt={`MBS Mind Body Soul Gallery ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent px-4 py-4 sm:px-5 sm:py-5">
                  <span className="text-[11px] font-semibold text-white sm:text-xs">
                    MBS Mind Body Soul
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* View More Gallery */}
        <div className="mt-6 text-center sm:mt-8">

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-[#AE2580] px-5 py-2.5 text-sm font-semibold text-[#AE2580] transition hover:bg-[#AE2580] hover:text-white sm:px-6 sm:py-3 sm:text-base"
          >
            View More Gallery
            <span className="text-base sm:text-lg">→</span>
          </Link>

        </div>

      </div>

      {/* Auto Scroll Animation */}
      <style>
        {`
          .gallery-track {
            animation: gallery-scroll 25s linear infinite;
          }

          @keyframes gallery-scroll {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(calc(-50% - 6px));
            }
          }
        `}
      </style>

    </section>
  );
};

export default Gallery;